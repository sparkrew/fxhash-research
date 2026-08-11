#version 300 es

precision highp float;

out vec4 out_color;

uniform vec2 resolution;
uniform float time;

uniform float u_seedhashA;
uniform float u_seedhashB;
uniform float u_seedhashC;
uniform float u_globalSeed;
uniform float u_speedFactor;
uniform float u_N1, u_N2, u_N3;
uniform float u_R1, u_R2, u_R3;
uniform float u_hasGold;
uniform float u_hasGoldSubLayers;
uniform float u_noLayer3;
uniform float u_inverted;
uniform int u_paletteId;
uniform vec3 u_tint;


// ── Hash ─────────────────────────────────────────────────────────

vec2 hash22(vec2 p) {
    vec2 offset = vec2(u_seedhashA * 20.0, u_seedhashA * 10.0);
    p += offset;
    p  = fract(p * vec2(5.3901, 5.4437));
    p += dot(p.yx, p.xy + vec2(21.53152+u_seedhashB, 14.3556));
    return fract(vec2(p.x * p.y * 25.4538,
                      p.x * p.y * 91.5021-u_seedhashC));
}


// ── Grain ────────────────────────────────────────────────────────

float grain(vec2 fragCoord) {
    // Seed qui change par frame (30fps discret)
    vec2 seed = fragCoord + fract(u_globalSeed * 96.98478 * 0.0005) * 4591.0;
    // Hash rapide sans sin()
    seed = fract(seed * vec2(0.1031, 0.1030 + u_globalSeed));
    seed += dot(seed, seed.yx + 33.33);
    return fract((seed.x + seed.y) * seed.x);
}

float grain2(vec2 fragCoord) {
    // Grain fin — 1 pixel
    vec2 s1 = fract(fragCoord * vec2(0.1031, 0.1030));
    s1 += dot(s1, s1.yx + 33.33);
    float gFin = fract((s1.x + s1.y) * s1.x);

    // Grain gros — 3 pixels
    vec2 s2 = fract(floor(fragCoord / 3.0) * vec2(0.1031, 0.1030));
    s2 += dot(s2, s2.yx + 33.33);
    float gGros = fract((s2.x + s2.y) * s2.x);

    // Mélange : 70% fin + 30% gros
    return mix(gFin, gGros, 0.3);
}

// ── Voronoi ──────────────────────────────────────────────────────

vec3 voronoi(vec2 p, float speed, out vec2 localUV, out vec2 cellID) {
    vec2 i = floor(p);
    vec2 f = fract(p);

    float minDist1 = 1.0;
    float minDist2 = 1.0;
    vec2  minID    = vec2(0.0);
    vec2  minPoint = vec2(0.0);

    for (int x = -1; x <= 1; x++) {
    for (int y = -1; y <= 1; y++) {
        vec2 voisin  = vec2(float(x), float(y));
        vec2 pointAl = hash22(i + voisin);
        pointAl  = 0.5 + 0.5 * sin(time * speed + pointAl * 6.28);

        vec2  diff = voisin + pointAl - f;
        float dist = dot(diff, diff);

        if (dist < minDist1) {
            minDist2 = minDist1;
            minDist1 = dist;
            minID    = i + voisin;
            minPoint = voisin + pointAl;
        } else if (dist < minDist2) {
            minDist2 = dist;
        }
    }}

    cellID  = minID;
    localUV = f - minPoint;

    float d1 = sqrt(minDist1);
    float d2 = sqrt(minDist2);

    vec2 hashes = hash22(minID);
    return vec3(d2 - d1, hashes.x, hashes.y);
}

// ── Un layer complet : masques + rond ────────────────────────────
//
//   Retourne :
//     .x = estNoir
//     .y = estAvecRond * masqueRond
//     .z = estTransparent
//
//   unPixel  : 1.0 / (resolution.y / N)
//   rayon    : rayon du rond dans l'espace local de la cellule

vec3 layerVoronoi(
    vec2  uvScaled,
    float unPixel,
    float rayon,
    float speed,
    out vec2 localUV,
    out vec2 cellID
) {
    vec3  voro = voronoi(uvScaled, speed, localUV, cellID);
    float h    = voro.y;

    float estTransp = step(0.66, h);
    float estRond   = step(0.33, h) * (1.0 - estTransp);
    float estNoir   = 1.0 - estTransp - estRond;

    // Position aléatoire du rond dans la cellule
    vec2  pos     = (hash22(cellID) - 0.4) * 0.3;
    float masque  = clamp(
        1.0 - smoothstep(rayon - unPixel, rayon + unPixel, length(localUV - pos)),
        0.0, 1.0
    );

    return vec3(estNoir, estRond * masque, estTransp);
}


void main() {

    // ── UV ───────────────────────────────────────────────────────
    vec2 uv = gl_FragCoord.xy / resolution;
    uv      = uv - 0.5;
    uv.x   *= resolution.x / resolution.y;


    // ── Paramètres des layers ────────────────────────────────────
    //   N      = densité de la grille
    //   rayon  = taille du rond dans l'espace local

    float N1 = u_N1,  rayon1 = u_R1, speed1 = 0.02;
    float N2 = u_N2, rayon2 = u_R2, speed2 = 0.06;
    float N3 = u_N3, rayon3 = u_R3, speed3 = 0.62;

    speed1 *= u_speedFactor;
    speed2 *= u_speedFactor;
    speed3 *= u_speedFactor;


    // ── Layer 1 ──────────────────────────────────────────────────
    vec2 localUV1, cellID1;
    vec2 uvDisplaced = uv;// + curlNoise(uv * 1.0) * 0.075;
    vec3 L1 = layerVoronoi(
        uvDisplaced * N1,
        1.0 / (resolution.y / N1),
        rayon1,
        speed1,
        localUV1, cellID1
    );
    // L1.x = noir, L1.y = rond masqué, L1.z = transparent
    // Anneau layer 1
    vec2 h1 = hash22(cellID1);
    vec2  posRond1    = (h1 - 0.4) * 0.3;
    float distRond1   = length(localUV1 - posRond1);
    float rayonAn1    = rayon1 * 0.65;
    float epAn1       = 1.0 / (resolution.y / 5.0) * 4.0;
    float anneau1     = L1.y  // seulement dans les cellules avec rond
                  * (1.0 - smoothstep(epAn1, 0.0, abs(distRond1 - rayonAn1)));


    // ── Layer 2 (visible dans trous L1) ──────────────────────────
    vec2 localUV2, cellID2;
    vec3 L2 = layerVoronoi(
        uv * N2 + vec2(3.7, 1.9),
        1.0 / (resolution.y / N2),
        rayon2,
        speed2,
        localUV2, cellID2
    );

    float trou1     = L1.z;
    float noir2     = L2.x * trou1;
    float rond2     = L2.y * trou1;


    // ── Layer 3 (visible dans trous L1 ∩ trous L2) ───────────────
    vec2 localUV3, cellID3;
    vec3 L3 = layerVoronoi(
        uv * N3,
        1.0 / (resolution.y / N3),
        rayon3,
        speed3,
        localUV3, cellID3
    );

    float trou1et2  = L1.z * L2.z;
    float noir3     = L3.x * trou1et2;
    float rond3     = L3.y * trou1et2;

    // ── Couleurs ─────────────────────────────────────────────────
    vec3 blanc = vec3(0.85);
    vec3 noir  = vec3(0.05);

    vec3 grisl1, grisl2, grisl3;
    if (u_paletteId == 0) {
        grisl1 = noir;
        grisl2 = noir;
        grisl3 = noir;
    } else {
        grisl1 = vec3(h1.x * 0.4);   // 0.0 → 0.4, jamais blanc
        grisl2 = vec3(hash22(cellID2).x * 0.3);   // 0.0 → 0.4, jamais blanc
        grisl3 = vec3(hash22(cellID3).x * 0.2);   // 0.0 → 0.4, jamais blanc
    }
    vec3 rubis   = vec3(0.878, 0.067, 0.373);
    // couleur or antique
    vec3 gold = vec3(0.69, 0.56, 0.24);

    vec3 couleur = blanc;

    // - Layer 1
    couleur = mix(couleur, noir, L1.x);
    couleur = mix(couleur, grisl1, L1.y);

    if (u_hasGold > 0.5) {
        couleur = mix(couleur, gold, L1.y);
        couleur = mix(couleur, noir, L1.y * (1.0 - anneau1));
    } else {
        couleur = mix(couleur, noir, anneau1);
    }

    // - Layer 2
    couleur = mix(couleur, grisl2, noir2);
    if (u_hasGoldSubLayers > 0.5) {
        couleur = mix(couleur, rubis, rond2);
    } else {
        couleur = mix(couleur, noir, rond2);
    }
    

    // - Layer 3
    if (u_noLayer3 < 0.5) {
        couleur = mix(couleur, grisl3, noir3);
        if (u_hasGoldSubLayers > 0.5) {
            couleur = mix(couleur, rubis, rond3);
        } else {
            couleur = mix(couleur, noir, rond3);
        }
    }

    if (u_paletteId == 2 || u_paletteId == 3) {
        // Sepia / Icy
        couleur *= u_tint;
    }

    if (u_inverted > 0.5) {
        couleur = 1.0 - couleur;
    }

    // ── Post-processing ──────────────────────────────────────────
    couleur = couleur / (couleur + vec3(1.0));
    couleur = pow(couleur, vec3(1.0 / 2.1));

    // ── Vignette ─────────────────────────────────────────────────
    vec2  uvV   = (uv / vec2(resolution.x / resolution.y, 1.0)) + 0.5;
    float vignette = pow(
        uvV.x * (1.0 - uvV.x) *
        uvV.y * (1.0 - uvV.y) * 16.0,
        0.4
    );

    couleur *= vignette;

    // ── Grain ─────────────────────────────────────────────────
    float g = grain(gl_FragCoord.xy) * 2.0 - 1.0;

    // Intensité plus forte dans les midtones, douce dans les noirs et les blancs
    float luminosite = dot(couleur, vec3(0.29));
    float grainIntensity = 0.16 * smoothstep(0.0, 0.3, luminosite)
                             * smoothstep(1.0, 0.6, luminosite);

    couleur += g * grainIntensity;
    couleur  = clamp(couleur, 0.0, 1.0);

    out_color = vec4(couleur, 1.0);
}
class Build{

    static tower(pos,h,w,col,angle){

        strokeWeight(height * 0.003)
        //--Main body
        let p1 = pos;
        let p2 = [ p1[0] + w, p1[1]  ];
        let p3 = [ p2[0], p2[1] - h ];
        let p4 = [ p1[0],p3[1] ]
    
        let p5 = Interpolate.interpolateLine(p1,p2,0.5);
        p5[1] += w * 0.3;
    
        let curve = Interpolate.interpoalteCurve([p1,p5,p2],40)
    
        let points = [];
        curve.map(p => points.push(p));
        points.push(p3)
        points.push(p4)
    
        points = arrayManage.rotatePoints(points,angle);
    
        let extraP = arrayManage.rotatePoints([p1,p2,p3,p4,p5],angle);
        p1 = extraP[0];
        p2 = extraP[1];
        p3 = extraP[2];
        p4 = extraP[3];
        p5 = extraP[4];
    
        push()
        fill(col)
        beginShape();
        points.forEach((p) => vertex(p[0], p[1]));
        endShape(CLOSE);
        pop();
    
    
        //---Body Shadows
        let shadowDensity = 0.01;
        let Shadow_Noise = 0.02;
        for (let i = 0; i < 1; i += shadowDensity) {
          let n = noise(Shadow_Noise);
          let p_init = Interpolate.interpolateLine(p4, p1, i);
          let p_end = Interpolate.interpolateLine(p3, p2, i);
          let real_end = Interpolate.interpolateLine(p_init, p_end, n);
    
          push();
          strokeWeight(map(n,0,1,h * 0.003,h * 0.006))
          stroke(0, map(n, 0, 1, 80, 110));
          line(p_init[0], p_init[1], real_end[0], real_end[1]);
          pop();
          Shadow_Noise += 0.02;
        }
    
        //--inner curves (texture)
        let textureDensity = gen.randomFloat(0.03,0.1);
       
        for(let i = 0; i < 1; i+=textureDensity ){
            let dy = w * 0.2
            let p_init = Interpolate.interpolateLine(p4,p1,i);
            let p_end  = Interpolate.interpolateLine(p3,p2,i);
            let mid    = Interpolate.interpolateLine(p_init,p_end,0.5)
            mid[1] += dy;
    
            let points = Interpolate.interpoalteCurve([p_init,mid,p_end],40);
        
            push()
            strokeWeight(height * 0.0015)
            noFill();
            beginShape();
            points.forEach(p => vertex(p[0],p[1]))
            endShape()
            pop()
        }
    
        //----Vertical texture (random)
        if(gen.random() < .5){
            let verticalTextureDensity = gen.randomFloat(0.08,0.25);
            for(let i = 0; i < 1; i+=verticalTextureDensity ){
                let dy = w * 0.2
                let p_init = Interpolate.interpolateLine(p4,p3,i);
                let p_end  = Interpolate.interpolateLine(p1,p2,i);
                let mid    = Interpolate.interpolateLine(p_init,p_end,0.5)
                mid[1] += dy;
        
                let points = Interpolate.interpoalteCurve([p_init,mid,p_end],40);
            
                push()
                strokeWeight(height * 0.0015)
                noFill();
                beginShape();
                points.forEach(p => vertex(p[0],p[1]))
                endShape()
                pop()
            }
        }
    
        //---Top
        let h_top = h * gen.randomFloat(0.25,0.35);
    
        let P1 = Interpolate.interpolateLine(p4,p3,0.5);
        P1[1] -= h_top;
        let P2 = [ p3[0] + h_top*0.26, p3[1] ];
        let P3 = [ p4[0] - h_top*0.26, p4[1] ];
        let mid = Interpolate.interpolateLine(P2,P3,0.5)
        mid[1] += h_top * 0.4;
    
        let temporal_Points = Interpolate.interpoalteCurve([P2,mid,P3],40)
    
        let pts = [P1];
        temporal_Points.forEach(p => pts.push(p))
    
        push()
        fill(col)
        beginShape()
        pts.forEach(p => vertex(p[0],p[1]))
        endShape(CLOSE)
        pop()
    
    
        //--Line Top
        let select = gen.randomFloat(0.25,0.85);
        select = pts[ int(map(select,0.25,0.85,8,32)) ]
        push()
        strokeWeight(height * 0.003)
        line(P1[0],P1[1],select[0],select[1])
        pop()
    
        //--Shadows Top
        let shadowTopDensity = 0.02;
    
        let TopOff = 0.02;
        for(let i = 0; i < 1; i+=shadowTopDensity){
            let dy = w * 0.08
            let n = noise(TopOff);
            let p_init = Interpolate.interpolateLine(P1,P3,i);
            let p_end  = Interpolate.interpolateLine(P1,P2,i);
            let end    = Interpolate.interpolateLine(p_init,p_end,map(n,0,1,0.1,1));
            let mid = Interpolate.interpolateLine(p_init,end,0.5);
            mid[1] += dy;
            let points = [p_init,mid,end]
    
            points = Interpolate.interpoalteCurve(points,40)
    
            push()
            strokeWeight(map(n,0,1,h * 0.004,h * 0.006))
            stroke(0, map(n, 0, 1, 80, 110));
            noFill();
            beginShape()
            points.forEach(p => vertex(p[0],p[1]))
            endShape()
            pop()
            TopOff +=  0.02;
    
        }
    
        
     
        //--Windows
        let window_density = 0.1;
        let window_type = gen.randomElement(["cricle",'square'])
        let windoOff = 0.02;
    
        for(let i = 0.1; i < 0.87; i+=window_density){
            let p_init = Interpolate.interpolateLine(p1,p4,i);
            let p_end  = Interpolate.interpolateLine(p2,p3,i);
            let end = Interpolate.interpolateLine(p_init,p_end,gen.randomFloat(0.45,0.55));
            let n = noise(windoOff);
            push()
            rectMode(CENTER)
            fill(n * 255)
            window_type === "square" ? rect(end[0],end[1],h * 0.04) : circle(end[0],end[1],h * 0.04)
            pop()
            windoOff += 0.03;
        }
    }


    static house(pos, h, w, col) {

        strokeWeight(height * 0.003);
    
        let desp = h * 0.2;
        let p1 = pos;
        let p2 = [p1[0] + w, p1[1] + desp];
        let p3 = [p2[0], p2[1] - h];
        let p4 = [p1[0], p3[1] - desp];
    
        let front = [p1, p2, p3, p4];
    
        push();
        fill(col);
        beginShape();
        front.forEach(p => vertex(p[0], p[1]));
        endShape(CLOSE);
        pop();
    
        //===Shadows 1
        let frontDensity = 0.02;
        let frontOff = 0.02;
    
        for (let i = 0; i < 1; i += frontDensity) {
            let n = noise(frontOff);
            let p_init = Interpolate.interpolateLine(p4, p1, i);
            let p_end = Interpolate.interpolateLine(p3, p2, i);
            let end = Interpolate.interpolateLine(p_init, p_end, n);
    
            push();
            strokeWeight(h * 0.007)
            stroke(0, map(n, 0, 1, 100, 255))
            line(p_init[0], p_init[1], end[0], end[1])
            pop();
    
            frontOff += 0.03;
        }
    
        for (let i = 0; i < 1; i += frontDensity) {
            let n = noise(frontOff);
            let p_init = Interpolate.interpolateLine(p4, p3, i);
            let p_end = Interpolate.interpolateLine(p1, p2, i);
            let end = Interpolate.interpolateLine(p_init, p_end, n);
    
            push();
            strokeWeight(h * 0.007)
            stroke(0, map(n, 0, 1, 100, 255))
            line(p_init[0], p_init[1], end[0], end[1])
            pop();
    
            frontOff += 0.03;
        }
    
        //====Door
        let door_h = h * 0.5;
        let d1 = Interpolate.interpolateLine(p1, p2, 0.35)
        let d2 = Interpolate.interpolateLine(p1, p2, 0.65)
        let d3 = [d2[0], d2[1] - door_h];
        let d4 = [d1[0], d1[1] - door_h];
    
        let d_points = [d1, d2, d3, d4]
    
        push();
        fill(col);
        beginShape();
        d_points.forEach(p => vertex(p[0], p[1]));
        endShape(CLOSE);
        pop();
    
    
        //===Parte larga de la casa
        let p1_back = p3;
        let p2_back = [p1_back[0] + h * 1.5, p1_back[1] - desp];
        let p3_back = [p2_back[0], p2_back[1] + h];
        let p4_back = p2;
    
        let front2 = [p1_back, p2_back, p3_back, p4_back]
    
        push();
        fill(col);
        beginShape();
        front2.forEach(p => vertex(p[0], p[1]));
        endShape(CLOSE);
        pop();
    
        //==Shadows 2
    
        let backDensity = 0.02;
        let backOff = 0.02;
    
        for (let i = 0; i < 1; i += backDensity) {
            let n = noise(backOff);
            let p_init = Interpolate.interpolateLine(p4_back, p1_back, i);
            let p_end = Interpolate.interpolateLine(p3_back, p2_back, i);
            let end = Interpolate.interpolateLine(p_init, p_end, n);
    
            push();
            strokeWeight(h * 0.007)
            stroke(0, map(n, 0, 1, 100, 255))
            line(p_init[0], p_init[1], end[0], end[1])
            pop();
    
            backOff += 0.03;
        }
    
        //==Windows
    
        let w1 = [Interpolate.interpolateLine(p1_back, p2_back, 0.2)[0], Interpolate.interpolateLine(p1_back, p4_back, 0.3)[1]];
        let w2 = [Interpolate.interpolateLine(p1_back, p2_back, 0.4)[0], Interpolate.interpolateLine(p1_back, p4_back, 0.25)[1]];
        let w3 = [Interpolate.interpolateLine(p1_back, p2_back, 0.428)[0], Interpolate.interpolateLine(p1_back, p4_back, 0.55)[1]];
        let w4 = [Interpolate.interpolateLine(p1_back, p2_back, 0.22)[0], Interpolate.interpolateLine(p1_back, p4_back, 0.6)[1]];
    
        let window_1 = [w1, w2, w3, w4]
    
        push();
        fill(col);
        beginShape();
        window_1.forEach(p => vertex(p[0], p[1]));
        endShape(CLOSE);
        pop()
    
        let W1 = [Interpolate.interpolateLine(p1_back, p2_back, 0.67)[0], Interpolate.interpolateLine(p1_back, p4_back, 0.21)[1]];
        let W2 = [Interpolate.interpolateLine(p1_back, p2_back, 0.87)[0], Interpolate.interpolateLine(p1_back, p4_back, 0.15)[1]];
        let W3 = [Interpolate.interpolateLine(p1_back, p2_back, 0.9)[0], Interpolate.interpolateLine(p1_back, p4_back, 0.4)[1]];
        let W4 = [Interpolate.interpolateLine(p1_back, p2_back, 0.67)[0], Interpolate.interpolateLine(p1_back, p4_back, 0.45)[1]];
    
        //circle(W1[0], W1[1], 10);
        //circle(W2[0], W2[1], 10);
        //circle(W3[0], W3[1], 10);
    
        let window_2 = [W1, W2, W3, W4]
        push();
        fill(col);
        beginShape();
        window_2.forEach(p => vertex(p[0], p[1]));
        endShape(CLOSE);
        pop()
    
    
    
        //Top
        let p1_top = Interpolate.interpolateLine(p4, p3, 0.5);
        p1_top[1] -= h * 0.5;
        let p2_top = [p4[0] - h * 0.12, p4[1] + h * 0.12]
        let p3_top = [p3[0] + h * 0.12, p3[1] + h * 0.12]
    
        let top = [p1_top, p2_top, p3_top]
    
        push();
        fill(col);
        beginShape();
        top.forEach(p => vertex(p[0], p[1]));
        endShape(CLOSE);
        pop();
    
        //==Parte 2 del top
        let P1 = p1_top;
        let P2 = [p1_top[0] + h * 1.6, p1_top[1] - desp * 0.8]
        let P3 = [p3_top[0] + h * 1.56, p3_top[1] - desp]
        let P4 = p3_top;
    
        let top2 = [P1, P2, P3, P4]
    
        push();
        fill(col);
        beginShape();
        top2.forEach(p => vertex(p[0], p[1]));
        endShape(CLOSE);
        pop();
    
    
    }

    static towerRect(pos, h, w, col, angle) {

        strokeWeight(height * 0.003);
    
        //===Body 1
        let p1 = pos;
        let p2 = [p1[0] + w, p1[1]];
        let p3 = [p2[0], p2[1] - h];
        let p4 = [p1[0], p3[1]];
    
        let body = arrayManage.rotatePoints([p1, p2, p3, p4], angle);
    
        p1 = body[0], p2 = body[1], p3 = body[2], p4 = body[3];
    
        push();
        fill(col);
        beginShape();
        body.forEach(p => vertex(p[0], p[1]));
        endShape(CLOSE);
        pop();
    
    
        //===Shadows 1
        let bodyDensisty_1 = 0.01;
        let Off_1 = 0.02;
    
        for (let i = 0; i < 1; i += bodyDensisty_1) {
            let n = noise(Off_1);
            let p_init = Interpolate.interpolateLine(p4, p1, i);
            let p_end = Interpolate.interpolateLine(p3, p2, i);
            let end = Interpolate.interpolateLine(p_init, p_end, n);
            Off_1 += 0.03;
    
            push();
            strokeWeight(h * 0.002)
            line(p_init[0], p_init[1], end[0], end[1]);
            pop();
        }
    
        //====Body 1 texture
        let bodyTextureDensity = gen.randomElement([0.15, 0.25, 0.4, 0.5]);
    
        for (let i = 0; i < 1; i += bodyTextureDensity) {
            let p_init = Interpolate.interpolateLine(p4, p1, i);
            let p_end = Interpolate.interpolateLine(p3, p2, i);
    
            push();
            line(p_init[0], p_init[1], p_end[0], p_end[1]);
            pop();
        }
    
        //===Body 2
        let des = h * 0.1;
        let b1 = p4;
        let b2 = [b1[0] - w * 0.45, b1[1] - des];
        let b4 = p1;
        let b3 = [p1[0] - w * 0.45, p1[1] - des];
    
    
        let body2 = [b1, b2, b3, b4];
    
        push();
        fill(col);
        beginShape();
        body2.forEach(p => vertex(p[0], p[1]));
        endShape(CLOSE);
        pop();
    
        //==Top 1 
    
        let top_H_max = h * 0.4;
        let H_max = Interpolate.interpolateLine(b2, p3, 0.5);
        H_max[1] -= top_H_max;
        let aux = Interpolate.interpolateLine(p4, p3, 0.5);
    
        let T1 = b2;
        let T2 = p4;
        let T3 = Interpolate.interpolateLine(H_max, aux, 0.1);
    
    
    
        let Top1 = [T1, T2, T3];
    
        push();
        fill(col);
        beginShape();
        Top1.forEach(p => vertex(p[0], p[1]));
        endShape(CLOSE);
        pop();
    
        //Top 2
    
        let t1 = T3;
        let t2 = p3;
        let t3 = p4;
    
        let Top2 = [t1, t2, t3];
    
        push();
        fill(col);
        beginShape();
        Top2.forEach(p => vertex(p[0], p[1]));
        endShape(CLOSE);
        pop();
    
    
        //===Line top;
        let A0 = [t1[0], t1[1]];
        let A1 = [t1[0], t1[1] - h * 0.25]
    
        let pts = arrayManage.rotatePoints([A0, A1], angle);
    
    
        push();
        strokeWeight(height * 0.007);
        line(pts[0][0], pts[0][1], pts[1][0], pts[1][1])
        //line(t1[0], t1[1], t1[0], t1[1] - h * 0.25);
        pop();
    
    
    
    }


    static towerRectTop(pos, h, w, col, angle) {

        strokeWeight(height * 0.003);
    
        //===Body 1
        let p1 = pos;
        let p2 = [p1[0] + w, p1[1]];
        let p3 = [p2[0], p2[1] - h];
        let p4 = [p1[0], p3[1]];
    
        let body = arrayManage.rotatePoints([p1, p2, p3, p4], angle);
    
        p1 = body[0], p2 = body[1], p3 = body[2], p4 = body[3];
    
        push();
        fill(col);
        beginShape();
        body.forEach(p => vertex(p[0], p[1]));
        endShape(CLOSE);
        pop();
    
    
        //===Shadows 1
        let bodyDensisty_1 = 0.01;
        let Off_1 = 0.02;
    
        for (let i = 0; i < 1; i += bodyDensisty_1) {
            let n = noise(Off_1);
            let p_init = Interpolate.interpolateLine(p4, p1, i);
            let p_end = Interpolate.interpolateLine(p3, p2, i);
            let end = Interpolate.interpolateLine(p_init, p_end, n);
            Off_1 += 0.03;
    
            push();
            strokeWeight(h * 0.002)
            line(p_init[0], p_init[1], end[0], end[1]);
            pop();
        }
    
        //====Body 1 texture
        let bodyTextureDensity = gen.randomElement([0.15, 0.25, 0.4, 0.5]);
    
        for (let i = 0; i < 1; i += bodyTextureDensity) {
            let p_init = Interpolate.interpolateLine(p4, p1, i);
            let p_end = Interpolate.interpolateLine(p3, p2, i);
    
            push();
            line(p_init[0], p_init[1], p_end[0], p_end[1]);
            pop();
        }
    
        //===Body 2
        let des = h * 0.1;
        let b1 = p4;
        let b2 = [b1[0] - w * 0.45, b1[1] - des];
        let b4 = p1;
        let b3 = [p1[0] - w * 0.45, p1[1] - des];
    
    
        let body2 = [b1, b2, b3, b4];
    
        push();
        fill(col);
        beginShape();
        body2.forEach(p => vertex(p[0], p[1]));
        endShape(CLOSE);
        pop();
    
        //==Top 1 
    
        let top_H_max = h * 0.4;
        let H_max = Interpolate.interpolateLine(b2, p3, 0.5);
        H_max[1] -= top_H_max;
        let aux = Interpolate.interpolateLine(p4, p3, 0.5);
    
        let T1 = b2;
        let T2 = p4;
        let T3 = Interpolate.interpolateLine(H_max, aux, 0.1);
    
    
    
        let Top1 = [T1, T2, T3];
    
        push();
        fill(col);
        beginShape();
        Top1.forEach(p => vertex(p[0], p[1]));
        endShape(CLOSE);
        pop();
    
        //Top 2
    
        let t1 = T3;
        let t2 = p3;
        let t3 = p4;
    
        let Top2 = [t1, t2, t3];
    
        push();
        fill(col);
        beginShape();
        Top2.forEach(p => vertex(p[0], p[1]));
        endShape(CLOSE);
        pop();
    
    
        //===Line top;
        let A0 = [t1[0], t1[1]];
        let A1 = [t1[0], t1[1] - h * 0.25]
    
        let pts = arrayManage.rotatePoints([A0, A1], angle);
    
    
        push();
        strokeWeight(height * 0.007);
        line(pts[0][0], pts[0][1], pts[1][0], pts[1][1])
        //line(t1[0], t1[1], t1[0], t1[1] - h * 0.25);
        pop();
    
        //==Top
        let dx = h * 0.07;
        let space = h * 0.1;
        let p0_ = p3;
        let p1_ = [p3[0] + dx, p3[1]];
        let p2_ = [p1_[0], p1_[1] - dx];
        let p3_ = [p2_[0] - space, p2_[1]];
        let p4_ = [p3_[0], p3_[1] + dx * 0.5];
        let p5_ = [p4_[0] - space, p4_[1]];
        let p6_ = [p5_[0], p3_[1]];
        let p7_ = [p6_[0] - dx, p6_[1]];
        let p8_ = [p7_[0], p7_[1] + dx * 0.5];
        let p9_ = [p8_[0] - space, p8_[1]];
        let p10_ = [p9_[0], p9_[1] - dx * 0.5];
        let p11_ = [p10_[0] - dx * 1.2, p10_[1]];
        let p12_ = [p11_[0], p11_[1] + dx * 0.5];
    
    
        let pivote = [b2[0], b2[1] - dx * 0.5] //este punto es para interpolar
        let pivote2 = [b2[0], b2[1] - dx]
    
        let p14_ = Interpolate.interpolateLine(pivote, p12_, 0.65);
        let p15_ = [p14_[0], p14_[1] - dx * 0.5];
        let p16_ = Interpolate.interpolateLine(pivote2, p15_, 0.65);
        let p17_ = Interpolate.interpolateLine(pivote, p12_, 0.4);
        let p18_ = pivote;
        let p19_ = pivote2;
        let p20_ = [p19_[0] - dx * 0.5, p19_[1] - dx * 0.3];
        let p21_ = [p20_[0], p20_[1] + dx * 1.1];
        let p22_ = b2;
        let p23_ = p4;
    
        let tw = [p0_, p1_, p2_, p3_, p4_, p5_, p6_, p7_, p8_, p9_, p10_, p11_, p12_, p14_, p15_, p16_, p17_, p18_, p19_, p20_, p21_, p22_, p23_];
    
    
        //circle(pivote2[0], pivote2[1], 5);
    
    
        push();
        fill(col);
        beginShape();
        tw.forEach(p => vertex(p[0], p[1]));
        endShape();
        pop();
    
    
    
    
    
    }


    static windmill(pos, h, w, col, angle) {
        strokeWeight(height * 0.003);
    
        //==Cara frontal;
        let dx = h * 0.12;
        let des = h * 0.1;
        let p1 = pos;
        let p2 = [pos[0] + w, pos[1]];
        let p3 = [p2[0], p2[1] - h];
        let p4 = [p1[0], p3[1]];
        p3[0] -= dx;
        p4[0] += dx;
    
        let body = [p1, p2, p3, p4];
        body = arrayManage.rotatePoints(body, angle);
        p1 = body[0];
        p2 = body[1];
        p3 = body[2];
        p4 = body[3];
    
    
        //cara lateral;
        let p5 = [p3[0] + des, p3[1] - des * 0.3]
        let p6 = [p2[0] + des, p2[1] - des * 0.3]
        let body2 = [p3, p5, p6, p2];
    
    
        push();
        fill(col);
        beginShape();
        body.forEach(p => vertex(p[0], p[1]));
        endShape(CLOSE);
        pop();
    
        push();
        fill(col);
        beginShape();
        body2.forEach(p => vertex(p[0], p[1]));
        endShape(CLOSE);
        pop();
    
        //===Top;
        let P1 = p4;
        let P2 = p3;
        let P3 = p5;
        let P4 = [P3[0] - des * 1.5, P3[1]];
    
        let top = [P1, P2, P3, P4];
    
        push();
        fill(col);
        beginShape();
        top.forEach(p => vertex(p[0], p[1]));
        endShape(CLOSE);
        pop();
    
    
        //===Shadows front
        let density = 0.01;
        let Off = 0.02;
    
        for (let i = 0; i < 1; i += density) {
            let n = noise(Off);
            let p_init = Interpolate.interpolateLine(p4, p1, i);
            let p_end = Interpolate.interpolateLine(p3, p2, i);
            let end = Interpolate.interpolateLine(p_init, p_end, n);
            Off += 0.03;
    
            push();
            strokeWeight(h * 0.007)
            stroke(0, map(n, 0, 1, 100, 255))
            line(p_init[0], p_init[1], end[0], end[1]);
            pop();
        }
    
        //===Eje
        let c = Interpolate.interpolateLine(p4, p3, 0.5);
        c[1] += h * 0.1;
    
        let H = h * 0.45;
        let W = H * 0.35;
        let m = 45;
        for (let a = 0; a < 360; a += m) {
            c = Interpolate.interpolateLine(p4, p3, 0.2);
            c[1] += h * 0.1;
            this.propeller(c, H, W, col, a);
        }
    
    
    
    
    
        push();
        fill(col)
        circle(c[0], c[1], h * 0.1)
        circle(c[0], c[1], h * 0.06)
        circle(c[0], c[1], h * 0.04)
        pop();
    
        //===Door;
        let dh = h * gen.randomFloat(0.1, 0.25);
        let a1 = Interpolate.interpolateLine(p1, p2, 0.35);
        let a2 = Interpolate.interpolateLine(p1, p2, 0.65);
        let a4 = [a1[0], a1[1] - dh];
        let a3 = [a2[0], a2[1] - dh];
    
        let d = [a1, a2, a3, a4];
    
        push();
        fill(col);
        beginShape();
        d.forEach(p => vertex(p[0], p[1]));
        endShape(CLOSE);
        pop();
    
    }
    
    
    static propeller(pos, h, w, col, angle) {
        strokeWeight(height * 0.003);
    
        let dx = h * 0.14;
        let des = h * 0.1;
        let p1 = pos;
        let p2 = [pos[0] + w, pos[1]];
        let p3 = [p2[0], p2[1] - h];
        let p4 = [p1[0], p3[1]];
        p2[0] -= dx;
        p1[0] += dx;
    
        let body = [p1, p2, p3, p4];
        let centerX = Interpolate.interpolateLine(p1, p2, 0.5)[0];
        let centerY = Interpolate.interpolateLine(p1, p2, 0.5)[1];
        body = arrayManage.rotatePoints(body, angle, centerX, centerY);
        p1 = body[0];
        p2 = body[1];
        p3 = body[2];
        p4 = body[3];
    
    
        push();
        fill(col);
        beginShape();
        body.forEach(p => vertex(p[0], p[1]));
        endShape(CLOSE);
        pop();
    
    }
    

}

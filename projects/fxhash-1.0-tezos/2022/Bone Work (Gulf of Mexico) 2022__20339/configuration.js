class Config
{
    requestingShadowMap()
    {
        return true;
    }

    requestingSSAO()
    {
        return false;
    }

    constructor()
    {
        this.turbity_min = 5;
        this.turbity_max = 5.0;
        this.luminance_min = 0.95;
        this.luminance_max = 0.95;
        this.rayleigh_min = 0.9;
        this.rayleigh_max = 0.9;
        this.mieDirectionalG_min = 0.85;
        this.mieDirectionalG_max = 0.8;
        this.mieCoefficient_min = 0.0006;       
        this.mieCoefficient_max = 0.0006;              
    }

    getSkySettings()
    {        
        return {
            turbidity : lerp(this.turbity_min, this.turbity_max, fxrand()),
            luminance : lerp(this.luminance_min, this.luminance_max, fxrand()),
            rayleigh : lerp(this.rayleigh_min, this.rayleigh_max, fxrand()),
            mieDirectionalG : lerp(this.mieDirectionalG_min, this.mieDirectionalG_max, fxrand()),
            mieCoefficient : lerp(this.mieCoefficient_min, this.mieCoefficient_max, fxrand())
        };
    }
}

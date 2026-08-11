class DateAndTime
{
    constructor(adt)
    {
        this.fullScreenUITexture = adt;
        var now = new Date();
        this.simulatedDate = new Date(now.getFullYear(), now.getMonth(), now.getDay());
        this.useRealDate = false;        
        this.offset_in_S = Array(1);
        this.offset_in_S[0] = now.getHours() * 3600 + now.getMinutes()*60 + now.getSeconds();
        this.offset_in_Days = Array(1);
    }

    getLocalDate()
    {
        if(this.useRealDate)
        {
            return new Date();
        }

        var sim_minutes = Math.trunc(this.offset_in_S[0] / 60.0);
        var sim_seconds = this.offset_in_S[0] - sim_minutes * 60.0;
        var sim_hours = Math.trunc(sim_minutes / 60.0);
        sim_minutes = sim_minutes - sim_hours*60;

        sim_hours = Math.min(Math.max(sim_hours, 0), 23);

        var ret = new Date(this.simulatedDate.getFullYear(), this.simulatedDate.getMonth(), this.simulatedDate.getDay(),
                            sim_hours, sim_minutes, sim_seconds, 0);

        return ret;
    }

    isVisible()
    {
        if(this.panel == null) return false;
        return this.panel.isVisible;
    }

    show()
    {
        if(this.panel == null)
        {
            this.panel = new BABYLON.GUI.StackPanel("DateAndTimePanel");
            this.panel.width = "520px";
            this.panel.top = "-55px";
            this.panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            this.panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            this.fullScreenUITexture.addControl(this.panel);

            this.addArraySliders(this.panel, this.offset_in_S, "intra day", 0, 3600*24-1);

            this.textBlockSunInf = new BABYLON.GUI.TextBlock();
            this.textBlockSunInf.height = "25px";
            this.textBlockSunInf.color = "white";
            this.panel.addControl(this.textBlockSunInf);

            this.textBlockGeoInf = new BABYLON.GUI.TextBlock();
            this.textBlockGeoInf.height = "25px";
            this.textBlockGeoInf.color = "white";
            this.panel.addControl(this.textBlockGeoInf);

        } else
        {
            this.panel.isVisible = true;
        }
        console.log("DateAndTime: showing ui");
    }

    hide()
    {
        if(this.panel != null)
        {
            this.panel.isVisible = false;
        }
        console.log("DateAndTime: hiding ui");
    }

    addArraySliders(panel, array, title, minVal, maxVal)
    {
        var header = new BABYLON.GUI.TextBlock();
        header.text = title;
        header.height = "25px";
        header.color = "white";
        panel.addControl(header);
    
        for (let i = 0; i < array.length; i++) {
            let local_i = i;
            const slider = new BABYLON.GUI.Slider();
            slider.minimum = minVal;
            slider.maximum = maxVal;
            slider.displayThumb = false;
            slider.borderColor = "black";
            slider.color = "gray";
            slider.alpha = 1;
            slider.background = "white";
            slider.value = array[local_i];
            slider.height = "15px";
            slider.width = "500px";
            slider.onValueChangedObservable.add((value) => {
                array[local_i] = slider.value;
                var slider_hour = Math.floor(slider.value / 3600);
                var slider_minutes = (slider.value - slider_hour*3600) / 60;
                header.text = title + ` ${slider_hour}:${slider_minutes.toFixed(1)}`;
            });
            panel.addControl(slider);
        }
    }    

    /*
    static isLeapYear(year)
    {
        return (year & 3) == 0 && ((year % 25) != 0 || (year & 15) == 0);
    } 
    */  
}

class PiClass
{
  constructor()
  {
    this.cookID = 0;
  }

  setName(in_name)
  {
    this.name = in_name;
    return(this);
  }

  getName()
  {
    return(this.name);
  }

  getValue()
  {
    return(this.value);
  }

  setValue(in_value)
  {
    this.value = in_value;
  }

  askToCook()
  {
    // return(true);
    return(this.cookID<piTool.cookID);
  }
  cook()
  {
    this.cookID = piTool.cookID;
  }
}

class PiObject extends PiClass
{
  constructor(in_name,in_params = null)
  {
    super(in_name);
    this.parent = null;
    this.children = [];

    this.attributes = {};

  }

  addAttribute(in_name, in_value)
  {
    this.attributes[in_name] = in_value;
  }

  setParent(in_parent)
  {
    this.parent = in_parent;
    this.parent.addChild(this);
  }


  addChild(in_child)
  {
    this.children.push(in_child);
  }

}

class Pi1D extends PiClass
{
  constructor(in_value)
  {
    super();
    this.setValue(in_value);
  }

  cook()
  {
    if(super.askToCook())
    {
      super.cook();
    }
  }
}

class Pi1D_Mlt extends Pi1D
{
  constructor(in_a, in_b)
  {
    super(0);
    this.a = (in_a instanceof Pi1D) ? in_a : new Pi1D(in_a);
    this.b = (in_b instanceof Pi1D) ? in_b : new Pi1D(in_b);
    this.cook();
  }

  setA(in_a)
  {
    if(in_a instanceof Pi1D)
    {
      this.a = in_a;
    }else {
      this.a.setValue(in_a);
    }
    return(this);
  }

  setB(in_b)
  {
    if(in_b instanceof Pi1D)
    {
      this.b = in_b;
    }else {
      this.b.setValue(in_b);
    }
    return(this);
  }

  cook()
  {
    if(super.askToCook())
    {
      this.a.cook();
      this.b.cook();
      this.setValue(this.a.value * this.b.value);
      super.cook();
    }
  }
}

class Pi1D_Add extends Pi1D
{
  constructor(in_a, in_b)
  {
    super(0);
    this.a = (in_a instanceof Pi1D) ? in_a : new Pi1D(in_a);
    this.b = (in_b instanceof Pi1D) ? in_b : new Pi1D(in_b);
    this.cook();
  }

  setA(in_a)
  {
    if(in_a instanceof Pi1D)
    {
      this.a = in_a;
    }else {
      this.a.setValue(in_a);
    }
    return(this);
  }

  setB(in_b)
  {
    if(in_b instanceof Pi1D)
    {
      this.b = in_b;
    }else {
      this.b.setValue(in_b);
    }
    return(this);
  }

  cook()
  {
    if(super.askToCook())
    {
      this.a.cook();
      this.b.cook();
      this.setValue(this.a.value + this.b.value);
      super.cook();
    }
  }
}


class Pi1D_Angle extends Pi1D
{
  constructor(in_a, in_b)
  {
    super(0);
    this.a = (in_a instanceof Pi2D) ? in_a : new Pi2D(in_a);
    this.b = (in_b instanceof Pi2D) ? in_b : new Pi2D(in_b);
    this.cook();
  }

  setA(in_1, in_2=null)
  {
    if(in_2==null)
    {
      if(in_1 instanceof Pi2D)
      {
        this.a = in_1;
      }else {
        this.a.setValue(in_1,in_1);
      }
    }else {
      if(in_1 instanceof Pi1D && in_2 instanceof Pi1D)
      {
        this.a.setX(in_1);
        this.a.setY(in_2);
      }else {
        this.a.setValue(in_1,in_2);
      }
    }
    return(this);
  }

  setB(in_1, in_2=null)
  {
    if(in_2==null)
    {
      if(in_1 instanceof Pi2D)
      {
        this.b = in_1;
      }else {
        this.b.setValue(in_1,in_1);
      }
    }else {
      if(in_1 instanceof Pi1D && in_2 instanceof Pi1D)
      {
        this.b.setX(in_1);
        this.b.setY(in_2);
      }else {
        this.b.setValue(in_1,in_2);
      }
    }
    return(this);
  }

  cook()
  {
    if(super.askToCook())
    {
      this.a.cook();
      this.b.cook();
      this.setValue(atan2(this.b.value.y-this.a.value.y,this.b.value.x-this.a.value.x)/TWO_PI);
      super.cook();
    }
  }
}




class Pi1D_Speed extends Pi1D
{
  constructor({spd=0.01 , start=0}={})
  {
    super(start);
    this.init = start;
    this.spd = (spd instanceof Pi1D) ? spd : new Pi1D(spd);
  }

  setSpd(in_spd)
  {
    if(in_spd instanceof Pi1D)
    {
      this.spd = in_spd;
    }else {
      this.spd.setValue(in_spd);
    }
    return(this);
  }

  reset()
  {
    this.setValue(this.init);
  }

  cook()
  {
    if(super.askToCook())
    {
      this.spd.cook();
      this.value += this.spd.value;
      super.cook();
    }
  }
}




class Pi1D_Wave extends Pi1D
{
  constructor({amp=10, frq=.5, phase=0, spd=.01, offset = 0}={})
  {
    super(0);
    this.amp = (amp instanceof Pi1D) ? amp : new Pi1D(amp);
    this.frq = (frq instanceof Pi1D) ? frq : new Pi1D(frq);
    this.spd = (spd instanceof Pi1D) ? spd : new Pi1D(spd);
    this.phase = (phase instanceof Pi1D) ? phase : new Pi1D(phase);
    this.offset = (offset instanceof Pi1D) ? offset : new Pi1D(offset);
    this.evo = 0;
    this.cook();
  }

  setAmp(in_amp)
  {
    if(in_amp instanceof Pi1D)
    {
      this.amp = in_amp;
    }else {
      this.amp.setValue(in_amp);
    }
    return(this);
  }

  setFrq(in_frq)
  {
    if(in_frq instanceof Pi1D)
    {
      this.frq = in_frq;
    }else {
      this.frq.setValue(in_frq);
    }
    return(this);
  }

  setSpd(in_spd)
  {
    if(in_spd instanceof Pi1D)
    {
      this.spd = in_spd;
    }else {
      this.spd.setValue(in_spd);
    }
    return(this);
  }

  setPhase(in_phase)
  {
    if(in_phase instanceof Pi1D)
    {
      this.phase = in_phase;
    }else {
      this.phase.setValue(in_phase);
    }
    return(this);
  }

  setOffset(in_off)
  {
    if(in_off instanceof Pi1D)
    {
      this.offset = in_off;
    }else {
      this.offset.setValue(in_off);
    }
    return(this);
  }

  reset()
  {
    this.evo = 0;
  }

  cook()
  {
    if(super.askToCook())
    {
      this.amp.cook();
      this.frq.cook();
      this.spd.cook();
      this.phase.cook();
      this.offset.cook();
      this.setValue((sin(((this.evo+this.phase.value)*TWO_PI)*this.frq.value)*this.amp.value)+this.offset.value);
      this.evo += this.spd.value*this.frq.value;
      super.cook();
    }
  }
}

class Pi1D_Noise extends Pi1D
{
  constructor(lod=4, {uvw=[0,0,0], frq=[1,1,1], mlt=1, add=0, falloff=.66}={})
  {
    super(0);
    this.uvw = (uvw instanceof Pi3D) ? uvw : new Pi3D(uvw[0],uvw[1],uvw[2]);
    this.frq = (frq instanceof Pi3D) ? frq : new Pi3D(frq[0],frq[1],frq[2]);
    this.mlt = (mlt instanceof Pi1D) ? mlt : new Pi1D(mlt);
    this.add = (add instanceof Pi1D) ? add : new Pi1D(add);
    this.falloff = (falloff instanceof Pi1D) ? falloff : new Pi1D(falloff);
    // this.seed = in_seed;
    this.lod = lod;

    this.cook();
  }
  //
  // setSeed(in_seed)
  // {
  //   this.seed = in_seed;
  // }

  cook()
  {
    if(super.askToCook())
    {
      this.falloff.cook();
      this.uvw.cook();
      this.frq.cook();
      this.mlt.cook();
      this.add.cook();

      // noiseSeed(this.seed);
      noiseDetail(this.lod, this.falloff.value);

      this.setValue(this.add.value+this.mlt.value*(
        (noise(this.uvw.x.value*this.frq.x.value,this.uvw.y.value*this.frq.y.value,this.uvw.z.value*this.frq.z.value)
        +(1-this.falloff.value)*.25
        )*2-1));
      super.cook();
    }
  }
}
class Pi2D extends PiClass
{
  constructor(in_x=null,in_y=null)
  {
    super();
    this.x = (in_x==null) ? new Pi1D(0) : ((in_x instanceof Pi1D) ? in_x : new Pi1D(in_x));
    this.y = (in_y==null) ? new Pi1D(0) : ((in_y instanceof Pi1D) ? in_y : new Pi1D(in_y));
    this.value = createVector(this.x.value,this.y.value);
  }

  getX()
  {
    return(this.x.value);
  }
  getY()
  {
    return(this.y.value);
  }

  setX(in_x)
  {
    this.x = in_x;
  }
  setY(in_y)
  {
    this.y = in_y;
  }

  setValue(in_x, in_y)
  {
    this.x.setValue(in_x);
    this.y.setValue(in_y);
    this.value.set(this.x.value,this.y.value);
    return(this);
  }

  cook()
  {
    if(super.askToCook())
    {
      this.x.cook();
      this.y.cook();
      this.value.set(this.x.value,this.y.value);
      super.cook();
    }
  }
}

class Pi2D_Mouse extends Pi2D
{
  constructor(in_offsetX=0, in_offsetY=0)
  {
    super(0,0);
    this.offsetX = in_offsetX;
    this.offsetY = in_offsetY;
  }

  cook()
  {
    if(super.askToCook())
    {
      this.x.value = float(mouseX)/width + this.offsetX;
      this.y.value = float(mouseY)/height + this.offsetY;
      this.value.set(this.x.value, this.y.value);
      super.cook();
    }
  }
}

class Pi2D_Add extends Pi2D
{
  constructor(in_2D_a, in_2D_b)
  {
    super(0,0);
    this.a = (in_2D_a instanceof Pi2D) ? in_2D_a : new Pi2D(in_2D_a[0],in_2D_a[1]);
    this.b = (in_2D_b instanceof Pi2D) ? in_2D_b : new Pi2D(in_2D_b[0],in_2D_b[1]);
  }

  cook()
  {
    if(super.askToCook())
    {
      this.a.cook();
      this.b.cook();
      this.x.value = this.a.x.value + this.b.x.value;
      this.y.value = this.a.y.value + this.b.y.value;
      this.value.set(this.x.value, this.y.value);
      super.cook();
    }
  }
}

class Pi2D_ScalarMlt extends Pi2D
{
  constructor(in_2D_base=[1,0], in_1D_scalar = 1)
  {
    super(0,0);
    this.vec = (in_2D_base instanceof Pi2D) ? in_2D_base : new Pi2D(in_2D_base[0],in_2D_base[1]);
    this.mlt = (in_1D_scalar instanceof Pi1D) ? in_1D_scalar : new Pi1D(in_1D_scalar);
  }

  cook()
  {
    if(super.askToCook())
    {
      this.vec.cook();
      this.mlt.cook();
      this.x.value = this.vec.x.value * this.mlt.value;
      this.y.value = this.vec.y.value * this.mlt.value;
      this.value.set(this.x.value, this.y.value);
      super.cook();
    }
  }
}

class Pi2D_List extends Pi2D
{
  constructor(in_list = null)
  {
    super(0,0);
    this.list = [];

    if(in_list!=null)
    {
      if(in_list instanceof Array)
      {
        for(let i =0; i<in_list.length; i++)
        {
          this.add(in_list[i]);
        }
      }else if (in_list instanceof Pi2D){
        this.add(in_list);
      }
      this.cook();
    }
  }

  add(in_2D, in_weight = 1)
  {
    let inVec = (in_2D instanceof Pi2D) ? in_2D : new Pi2D(in_2D[0],in_2D[1]);
    let l = new Pi2D_ScalarMlt(inVec, in_weight);
    this.list.push(l);
    return(this);
  }

  get(in_id)
  {
    return(this.list[in_id]);
  }

  // set(in_id, in_val)
  // {
  //   this.list[in_id].set(in_val);
  // }

  cook()
  {
    if(super.askToCook())
    {
      let x=0,y=0;
      for(let l of this.list)
      {
        l.cook();
        x += l.x.value;
        y += l.y.value;
      }
      this.x.setValue(x);
      this.y.setValue(y);
      this.value.set(x,y);      super.cook();
    }
  }
}

class Pi2D_Polar extends Pi2D
{
  constructor({pos=[0,0], rad=10, rot=0}={})
  {
    super(0,0);
    this.pos = (pos instanceof Pi2D) ? pos : new Pi2D(pos[0],pos[1]);
    this.rad = (rad instanceof Pi1D) ? rad : new Pi1D(rad);
    this.rot = (rot instanceof Pi1D) ? rot : new Pi1D(rot);
  }

  setPos(in_pos)
  {
    if(in_pos instanceof Pi2D)
    {
      this.pos = in_pos;
    }else {
      this.pos.setValue(in_pos[0],in_pos[1]);
    }
    return(this);
  }

  setRad(in_rad)
  {
    if(in_rad instanceof Pi1D)
    {
      this.rad = in_rad;
    }else {
      this.rad.setValue(in_rad);
    }
    return(this);
  }

  setRot(in_rot)
  {
    if(in_rot instanceof Pi1D)
    {
      this.rot = in_rot;
    }else {
      this.rot.setValue(in_rot);
    }
    return(this);
  }

  cook()
  {
    if(super.askToCook())
    {
      this.pos.cook();
      this.rad.cook();
      this.rot.cook();
      this.x.setValue(this.pos.x.value + cos(this.rot.value*TWO_PI)*this.rad.value);
      this.y.setValue(this.pos.y.value + sin(this.rot.value*TWO_PI)*this.rad.value);
      this.value.set(this.x.value,this.y.value);
      super.cook();
    }
  }

}

class Pi2D_Wave extends Pi2D
{
  constructor({amp=[10,10], frq=[.5,.5], phase=[0,0], spd=[.01,.01], offset=[0,0]}={})
  {
    super(0);
    this.amp = (amp instanceof Pi2D) ? amp : new Pi2D(amp[0],amp[1]);
    this.frq = (frq instanceof Pi2D) ? frq : new Pi2D(frq[0],frq[1]);
    this.spd = (spd instanceof Pi2D) ? spd : new Pi2D(spd[0],spd[1]);
    this.phase = (phase instanceof Pi2D) ? phase : new Pi2D(phase[0],phase[1]);
    this.offset = (offset instanceof Pi2D) ? offset : new Pi2D(offset[0],offset[1]);
    this.evo = createVector(0,0);
  }

  setAmp(in_amp)
  {
    if(in_amp instanceof Pi2D)
    {
      this.amp = in_amp;
    }else {
      this.amp.setValue(in_amp[0],in_amp[1]);
    }
    return(this);
  }

  setFrq(in_frq)
  {
    if(in_frq instanceof Pi2D)
    {
      this.frq = in_frq;
    }else {
      this.frq.setValue(in_frq[0],in_frq[1]);
    }
    return(this);
  }

  setSpd(in_spd)
  {
    if(in_spd instanceof Pi2D)
    {
      this.spd = in_spd;
    }else {
      this.spd.setValue(in_spd[0],in_spd[1]);
    }
    return(this);
  }

  setPhase(in_phase)
  {
    if(in_phase instanceof Pi2D)
    {
      this.phase = in_phase;
    }else {
      this.phase.setValue(in_phase[0],in_phase[1]);
    }
    return(this);
  }

  setOffset(in_off)
  {
    if(in_off instanceof Pi2D)
    {
      this.offset = in_off;
    }else {
      this.offset.setValue(in_off[0],in_off[1]);
    }
    return(this);
  }

  cook()
  {
    if(super.askToCook())
    {
      this.amp.cook();
      this.frq.cook();
      this.phase.cook();
      this.spd.cook();
      this.x.setValue((cos(((this.evo.x+this.phase.x.value)*TWO_PI)*this.frq.x.value)*this.amp.x.value)+this.offset.x.value);
      this.y.setValue((sin(((this.evo.y+this.phase.y.value)*TWO_PI)*this.frq.y.value)*this.amp.y.value)+this.offset.y.value);
      this.value.set(this.x.value,this.y.value);
      this.evo.x += this.spd.value.x*this.frq.value.x;
      this.evo.y += this.spd.value.y*this.frq.value.y;
      super.cook();
    }
  }
}
class Pi3D extends PiClass
{
  constructor(in_x=0, in_y=0, in_z=0)
  {
    super();
    if(in_x instanceof Pi2D)
    {
      this.x = in_x.x;
      this.y = in_x.y;
      this.z = in_y instanceof Pi1D ? in_y : new Pi1D(in_y);
    }else {
      this.x = (in_x instanceof Pi1D) ? in_x : new Pi1D(in_x);
      this.y = (in_y instanceof Pi1D) ? in_y : new Pi1D(in_y);
      this.z = (in_z instanceof Pi1D) ? in_z : new Pi1D(in_z);
    }
    this.value = createVector(this.x.value,this.y.value, this.z.value);
  }

  getX()
  {
    return(this.x.value);
  }
  getY()
  {
    return(this.y.value);
  }
  getZ()
  {
    return(this.z.value);
  }

  setValue(in_x, in_y, in_z)
  {
    this.x.setValue(in_x);
    this.y.setValue(in_y);
    this.z.setValue(in_z);
    this.cook();
  }

  cook()
  {
    if(super.askToCook())
    {
      this.x.cook();
      this.y.cook();
      this.z.cook();
      this.value.set(this.x.value,this.y.value,this.z.value);
      super.cook();
    }
  }
}
class PiBuffer extends PiObject
{
  constructor(in_name)
  {
    super(in_name);
    this.points = [];
    this.width = 1;
    this.height = 1;
  }

  merge(in_pointsA,in_pointsB)
  {
    this.width = in_pointsA.length;
    this.height = in_pointsB.length;

    for(let x=0; x<this.width; x++)
    {
      for(let y=0; y<this.height; y++)
      {
        let id = x + y*in_pointsA.length;
        let pos = new Pi2D_Add(in_pointsA[x].pos, in_pointsB[y].pos);
        let uv = new Pi2D(in_pointsA[x].uv.x, in_pointsB[y].uv.x);
        this.points[id] = new PiVertex("BFR_" +this.name+'_'+str(id),pos,uv);
      }
    }
  }

  // addRow(in_points, in_rowIndex=this.points.length/this.width )
  // {
  //   let id = this.
  //   for(let x=0; x<this.width; x++)
  //   {
  //     this.points[]
  //   }
  // }

  get(in_x, in_y)
  {
    return(this.points[in_x + in_y*this.width])
  }

  cook()
  {
    for(let i=0; i<this.points.length; i++)
    {
      this.points[i].cook();
    }
  }
}

class PiColor extends PiClass
{
  constructor(in_rh, in_gs, in_bv, in_a = 1)
  {
    super();
    this.r = this.h = (in_rh instanceof Pi1D) ? in_rh : new Pi1D(in_rh);
    this.g = this.s = (in_gs instanceof Pi1D) ? in_gs : new Pi1D(in_gs);
    this.b = this.v = (in_bv instanceof Pi1D) ? in_bv : new Pi1D(in_bv);
    this.a = (in_a instanceof Pi1D) ? in_a : new Pi1D(in_a);
    this.value = color(this.r.value,this.g.value, this.b.value, this.a.value);
  }

  getR()
  {
    return(this.r.value);
  }
  getG()
  {
    return(this.g.value);
  }
  getB()
  {
    return(this.b.value);
  }
  getA()
  {
    return(this.a.value);
  }

  setValues(in_array)
  {
    this.r.setValue(in_array[0]);
    this.g.setValue(in_array[1]);
    this.b.setValue(in_array[2]);
    this.cook();
  }
  setValue(in_r, in_g, in_b, in_a=null)
  {
    this.r.setValue(in_r);
    this.g.setValue(in_g);
    this.b.setValue(in_b);
    if(in_a!=null){this.a.setValue(in_a);}
    this.cook();
  }

  cook()
  {
    if(super.askToCook())
    {
      this.r.cook();
      this.g.cook();
      this.b.cook();
      this.a.cook();
      this.value.setRed(this.r.value);
      this.value.setGreen(this.g.value);
      this.value.setBlue(this.b.value);
      this.value.setAlpha(this.a.value);
      super.cook();
    }
  }
}
function giveName(in_list, in_name)
{
  let name = in_name;
  if(in_list.hasOwnProperty(name))
  { name = this.makeUniqueName(in_list, name);
    print('! "' + in_name + '" already exists on this object! Name changed to > ' + name );
  }
  return(name);
}

function makeUniqueName(in_list, in_name)
{
  let nmArray = split(in_name,'__');
  let newName = nmArray[0] + "__0";
  if(nmArray.length>1)
  {
    let id = parseInt(nmArray[1])+1;
    newName = nmArray[0] + "__" + str(id);
  }
  if(in_list.hasOwnProperty(newName))
  {
    newName = this.makeUniqueName(in_list, newName);
  }
  return(newName);
}
class Pi1D_Map extends Pi1D
{
  constructor(in_input, in_iMin, in_iMax, in_oMin, in_oMax)
  {
    super(0);
    this.base = in_input;
    this.iMin = in_iMin;
    this.iMax = in_iMax;
    this.oMin = in_oMin;
    this.oMax = in_oMax;
  }

  cook()
  {
    if(super.askToCook())
    {
      this.base.cook();
      this.value = map(this.base.value, this.iMin, this.iMax, this.oMin, this.oMax);
      super.cook();
    }
  }
}

class Pi1D_NormToPosNeg extends Pi1D_Map
{
  constructor(in_input)
  {
    super(in_input, 0, 1, -1, 1);
  }
}
class PiLayer
{
  constructor(in_w, in_h)
  {
    this.wScale = in_w;
    this.hScale = in_h;
    this.sScale = Math.min(in_w,in_h)/1000;
    this.layer = createGraphics(in_w, in_h,p5.Renderer);
    this.layer.colorMode(RGB,1);

    // this.sSize = 1;
    // this.sColor = color(1);
    // this.fColor = color(1);
    // this.sOpacity = 1;
    // this.fOpacity = 1;
  }

  resizeResolution(in_w,in_h)
  {
    this.wScale *= in_wMlt;
    this.hScale *= in_hMlt;
    this.sScale = Math.min(in_w,in_h);
  }

  background(in_col)
  {
    this.layer.background(in_col);
  }

  clear()
  {
    this.layer.clear();
  }
  noStroke()
  {
    this.layer.noStroke();
  }

  stroke(in_col)
  {
    this.layer.stroke(in_col);
  }

  translate(in_x, in_y)
  {
    this.layer.translate(in_x,in_y);
  }

  draw()
  {
    image(this.layer,0,0);
  }

  text(in_point, in_text)
  {
    if (in_point instanceof PiVertex) {
      this.layer.text(in_text, in_point.pos.x.value*this.wScale, in_point.pos.y.value*this.hScale);
    }else if (in_point instanceof Pi2D){
      this.layer.text(in_text, in_point.x.value*this.wScale, in_point.y.value*this.hScale);
    }
  }
  point(in_point, in_size = 1)
  {
    this.layer.strokeWeight(in_size*this.sScale);
    if (in_shape instanceof PiVertex) {
      this.layer.point(in_shape.pos.x.value*this.wScale, in_shape.pos.y.value*this.hScale);
    }else if (in_shape instanceof Pi2D){
      this.layer.point(in_shape.x.value*this.wScale, in_shape.y.value*this.hScale);
    }
  }
  points(in_shape, in_size = 1)
  {
    this.layer.strokeWeight(in_size*this.sScale);
    for(let i=0; i<in_shape.points.length; i++)
    {
      this.layer.point(in_shape.points[i].pos.x.value*this.wScale, in_shape.points[i].pos.y.value*this.hScale);
    }

  }

  connectPoints(in_shape, in_size=1, {loop=false, limit=0, colorsByUV=null}={})
  {
    this.layer.strokeWeight(in_size*this.sScale);
    let start = (limit>0) ? limit : 0;
    let end = (limit<0) ? abs(limit) : 0;
    for(let i=start; i<in_shape.points.length-1-end; i++)
    {
      if(colorsByUV!=null)
      {
        this.layer.stroke(lerpColor(colorsByUV[0],colorsByUV[1],in_shape.points[i].uv.x.value));
      }
      this.layer.line(in_shape.points[i].pos.x.value*this.wScale, in_shape.points[i].pos.y.value*this.hScale,
                     in_shape.points[i+1].pos.x.value*this.wScale, in_shape.points[i+1].pos.y.value*this.hScale);
    }
    if(loop)
    {
      this.layer.line(in_shape.points[in_shape.points.length-1].pos.x.value*this.wScale,
        in_shape.points[in_shape.points.length-1].pos.y.value*this.hScale,
        in_shape.points[0].pos.x.value*this.wScale,
        in_shape.points[0].pos.y.value*this.hScale);
    }
  }

  connect2Points(in_vA, in_vB, in_size=1)
  {
    this.layer.strokeWeight(in_size*this.sScale);
    this.layer.line(in_vA.x.value*this.wScale, in_vA.y.value*this.hScale,
         in_vB.x.value*this.wScale, in_vB.y.value*this.hScale);
  }

  // connect2Verts(in_vA, in_vB)
  // {
  //   line(in_vA.pos.x.value*this.wScale, in_vA.pos.y.value*this.hScale,
  //        in_vB.pos.x.value*this.wScale, in_vB.pos.y.value*this.hScale);
  // }

  vert(in_vertex, {size = 1, col = null, alpha = -1}={})
  {
    if(in_vertex instanceof PiVertex)
    {
      let vCol = col==null ? in_vertex.color.value : color(col);
      if(alpha>-1)
      { vCol.setAlpha(alpha);
      }
      this.layer.stroke(vCol);
      this.layer.strokeWeight(size*this.sScale);
      this.layer.point(in_vertex.pos.x.value*this.wScale, in_vertex.pos.y.value*this.hScale);
    }else {
      if(col==null)
      { col = color(1);
      }
      if(alpha>-1)
      { col.setAlpha(alpha);
      }
      this.layer.stroke(col);
      this.layer.strokeWeight(size*this.sScale);
      this.layer.point(in_vertex.x.value*this.wScale, in_vertex.y.value*this.hScale);
    }
  }

  verts(in_shape, {size = 1, col = null, alpha = -1}={})
  {
    if(in_shape instanceof Array)
    {
      for(let shp of in_shape)
      {
        this.verts(shp, {size:size, col:col, alpha:alpha})
      }
    }else {
      for(let i=0; i<in_shape.points.length; i++)
      {
        this.vert(in_shape.points[i],{size:size, col:col, alpha:alpha});
      }
    }
  }

  circle(in_vertex, {size = 1, fill=-1, stroke=-1, weight=1, alpha = -1}={})
  {
    if(in_vertex instanceof PiVertex)
    {
      if(alpha>-1)
      { vCol.setAlpha(alpha);
      }
      this.layer.strokeWeight(weight*this.sScale);
      if(fill!=-1){this.layer.fill(fill);}else {this.layer.noFill();}
      if(stroke!=-1){ this.layer.stroke(stroke);}else{this.layer.noStroke();}

      this.layer.circle(in_vertex.pos.x.value*this.wScale, in_vertex.pos.y.value*this.hScale,size*this.wScale);
    }
    // else {
    //   if(col==null)
    //   { col = color(1);
    //   }
    //   if(alpha>-1)
    //   { col.setAlpha(alpha);
    //   }
    //   this.layer.stroke(col);
    //   this.layer.strokeWeight(size);
    //   this.layer.point(in_vertex.x.value*this.wScale, in_vertex.y.value*this.hScale);
    // }
  }

  rect(in_vert, {width=.2, height=.2, rot=0, stroke=-1, fill=-1, weight=1, rectMode=CENTER}={})
  {
    this.layer.rectMode(rectMode);
    this.layer.strokeWeight(weight*this.sScale);
    if(fill!=-1){this.layer.fill(fill);}else {this.layer.noFill();}
    if(stroke!=-1){ this.layer.stroke(stroke); }else { this.layer.noStroke();}
    this.layer.push();
    this.layer.translate(in_vert.pos.x.value*this.wScale, in_vert.pos.y.value*this.hScale);
    this.layer.rotate(rot*TWO_PI);
    this.layer.rect(0,0,width*this.wScale,height*this.hScale);
    this.layer.pop();
  }

  triangle(in_vert, {size=.1, rot=0, stroke=-1, fill=-1, weight=1}={})
  {
    this.layer.strokeWeight(weight*this.sScale);
    if(fill!=-1){this.layer.fill(fill);}else {this.layer.noFill();}
    if(stroke!=-1){ this.layer.stroke(stroke); }else { this.layer.noStroke();}
    this.layer.push();
    this.layer.translate(in_vert.pos.x.value*this.wScale, in_vert.pos.y.value*this.hScale);
    this.layer.rotate(rot*TWO_PI);
    this.layer.triangle(
      -size*this.wScale/2, -size*this.hScale*.33,
      size*this.wScale/2, -size*this.hScale*.33,
      0, size*this.hScale*.66
    )
    // this.layer.rect(0,0,width*this.wScale,height*this.hScale);
    this.layer.pop();
  }

  line(in_vertex, {size = 1, rot = 0, col = null, alpha = -1, weight=1}={})
  {
    if(in_vertex instanceof PiVertex)
    {
      let vCol = col==null ? in_vertex.color.value : color(col);
      if(alpha>-1)
      { vCol.setAlpha(alpha);
      }
      this.layer.stroke(vCol);
      this.layer.strokeWeight(weight*this.sScale);
      this.layer.push();
      this.layer.translate(in_vertex.pos.x.value*this.wScale, in_vertex.pos.y.value*this.hScale);
      this.layer.rotate(rot*TWO_PI);
      this.layer.line(-size*this.wScale/2,0,size*this.wScale/2,0);
      this.layer.pop();
    }
    // else {
    //   if(col==null)
    //   { col = color(1);
    //   }
    //   if(alpha>-1)
    //   { col.setAlpha(alpha);
    //   }
    //   this.layer.stroke(col);
    //   this.layer.strokeWeight(size);
    //   this.layer.point(in_vertex.x.value*this.wScale, in_vertex.y.value*this.hScale);
    // }
  }

  shape(in_shape, mode=CLOSE)
  {
    this.layer.noStroke();
    this.layer.beginShape();
    for(let i=0; i<in_shape.points.length; i++)
    {
      let pt = in_shape.points[i];
      this.layer.fill(pt.color.value);
      this.layer.vertex(pt.pos.x.value*this.wScale, pt.pos.y.value*this.hScale);
    }
    this.layer.endShape(mode);
  }


  grid(in_grid)
  {
    this.layer.noStroke();
    for(let x=0; x<in_grid.wCount-1; x++)
    {
      this.layer.beginShape(TRIANGLE_STRIP);

      for(let y=0; y<in_grid.hCount-1; y++)
        {
        let ptUL = in_grid.getCell(x  ,y  );
        let ptDL = in_grid.getCell(x  ,y+1);
        let ptDR = in_grid.getCell(x+1,y+1);
        let ptUR = in_grid.getCell(x+1,y  );

        this.layer.fill(ptUL.color.value);
        this.layer.vertex(ptUL.pos.x.value*this.wScale, ptUL.pos.y.value*this.hScale);

        this.layer.fill(ptUR.color.value);
        this.layer.vertex(ptUR.pos.x.value*this.wScale, ptUR.pos.y.value*this.hScale);

        this.layer.fill(ptDR.color.value);
        this.layer.vertex(ptDR.pos.x.value*this.wScale, ptDR.pos.y.value*this.hScale);

        this.layer.fill(ptUL.color.value);
        this.layer.vertex(ptUL.pos.x.value*this.wScale, ptUL.pos.y.value*this.hScale);

        this.layer.fill(ptDR.color.value);
        this.layer.vertex(ptDR.pos.x.value*this.wScale, ptDR.pos.y.value*this.hScale);

        this.layer.fill(ptDL.color.value);
        this.layer.vertex(ptDL.pos.x.value*this.wScale, ptDL.pos.y.value*this.hScale);
      }
      this.layer.endShape();
    }
  }

}

class PiObjectHolder
{
  constructor()
  {
    this.objects = {};
    this.world = new PiObject('World');
    this.objects['World'] = this.world;
  }

  new(in_name, in_params)
  {
    this.objects[in_name] = new PiObject(in_name,in_params);
    return(this.objects[in_name]);
  }
  add(in_obj)
  {
    this.objects[in_obj.name] = in_obj;
    return(in_obj);
  }
  get(in_name)
  {
    return(this.objects[in_name])
  }

}
class PiParamHolder
{
  constructor(in_parent)
  {
    this.parent = in_parent;
    this.list = {};
  }

  add(in_param, in_name=null)
  {
    let nm = (in_name==null) ? in_param.name : in_name;
    this.list[nm] = in_param;
  }

  add_1D(in_val, in_name='Param1D')
  {
    let new1D = new Pi1D(in_val);

    let name = giveName(this.list, in_name);
    new1D.name = name;
    this.list[name] = new1D;

    return(new1D);
  }

  add_2D(in_x, in_y, in_name='Param2D')
  {
    let name = giveName(this.list,in_name);

    let x = (in_x instanceof Pi1D) ? in_x : this.add_1D(in_x, name + '_X');
    let y = (in_y instanceof Pi1D) ? in_y : this.add_1D(in_y, name + '_Y');
    let new2D = new Pi2D(x, y);

    new2D.name = name;
    this.list[name] = new2D;

    return(new2D);
  }

  get(in_name)
  {
    return(this.list[in_name]);
    // by index >> this.list[((Object.keys(this.params))[in_nameOrIndex])];

  }

  // cook()  /////////////////////////////////////// this cooks all the attributes  that have been defined outside the scope of addParam (obj.attr = ...)
  ////////////////////////////////////////////////// it can make it possible for us to get rid of the whole PARAM HOLDER object
  // {
  //   let params = Object.keys(this.parent);
  //   for(let p of params)
  //   {
  //     let param = this.parent[p];
  //     if(param instanceof Pi1D || param instanceof Pi2D)
  //     { param.cook();
  //     }
  //   }
  // }


  cook()
  {
    for(let p in this.list)
    {
      this.list[p].cook();
    }
  }

}
class PiPoint extends PiObject
{
  constructor(in_pos, in_size = 1)
  {
    super();
    this.pos = (in_pos instanceof Pi2D) ? in_pos : new Pi2D(in_pos[0],in_pos[1]);
    this.size = (in_size instanceof Pi1D) ? in_size : new Pi1D(in_size);
  }

  setPos(in_pos)
  {
    if(in_pos instanceof Pi2D)
    {
      this.pos = in_pos;
    }else {
      this.pos.setValue(in_pos[0],in_pos[1]);
    }
    return(this);
  }

  setSize()
  {
    if(in_size instanceof Pi1D)
    {
      this.size = in_size;
    }else {
      this.size.setValue(in_size);
    }
    return(this);
  }

  cook()
  {
    this.pos.cook();
    this.size.cook();
  }
}

class PiVertex extends PiObject
{
  constructor(in_pos, {uv=[0,0], color=[1,1,1,1], alpha=1})
  {
    super();
    this.pos = (in_pos instanceof Pi2D) ? in_pos : new Pi2D(in_pos[0],in_pos[1]);
    this.uv = (uv instanceof Pi2D) ? uv : new Pi2D(uv[0],uv[1]);
    this.color = (color instanceof PiColor) ? color : new PiColor(color[0],color[1],color[2],alpha);
    // this.children = [];
    // this.parent = null;
  }

  setPos(in_pos)
  {
    if(in_pos instanceof Pi2D)
    {
      this.pos = in_pos;
    }else {
      this.pos.setValue(in_pos[0],in_pos[1]);
    }
    return(this);
  }

  setUV(in_uv)
  {
    if(in_uv instanceof Pi2D)
    {
      this.uv = in_uv;
    }else {
      this.uv.setValue(in_uv[0],in_uv[1]);
    }
    return(this);
  }

  setColor(in_col)
  {
    if(in_col instanceof Array)
    {
      this.color.setValues(in_col);
    }else if(in_col instanceof p5.Color)
    {
      this.color.setValue(red(in_col),green(in_col),blue(in_col));
    }else if(in_col instanceof Pi2D)
    {
      this.color.r = in_col.x;
      this.color.g = in_col.y;
      this.color.cook();
    }else if(in_col instanceof Pi3D)
    {
      this.color.r = in_col.x;
      this.color.g = in_col.y;
      this.color.b = in_col.z;
      this.color.cook();
    }
    return(this);
  }


  cook()
  {
    this.pos.cook();
    this.uv.cook();
    this.color.cook();

    for(let c of this.children)
    {
      c.cook();
    }
  }
}
class PiShape extends PiObject
{
  constructor(in_pos=[0,0])
  {
    super();
    this.pos = (in_pos instanceof Pi2D) ? in_pos : new Pi2D(in_pos[0],in_pos[1]);
    this.points = [];
  }

  setPos(in_pos)
  {
    if(in_pos instanceof Pi2D)
    {
      this.pos = in_pos;
    }else {
      this.pos.setValue(in_pos[0],in_pos[1]);
    }
    return(this);
  }

  setPointsName(in_name=this.name)
  {
    for(let i=0; i<this.points.length; i++)
    {
      let p = this.points[i];
      p.setName(in_name + "_" + str(i));
    }
  }

  setPointsParent(in_parent, setTransform=false)
  {
    // this.parent = in_parent;
    for(let p of this.points)
    {
      p.setParent(in_parent,setTransform);
    }
  }

  setPointsColor(in_col)
  {
    for(let p of this.points)
    {
      p.setColor(in_col);
    }
  }


  setPointsHierarchy()
  {
    for(let i=0; i<this.points.length; i++)
    {
      let p = this.points[i];
      p.addAttribute('Parent',i==0?null:this.points[i-1]);
    }
  }

  setPointsID()
  {
    for(let i=0; i<this.points.length; i++)
    {
      this.points[i].addAttribute('id',i);
    }
  }
  // addAttribute(in_n, in_v)
  // {
  //   for(let p of this.points)
  //   {
  //     p.addAttribute(in_n, in_v);
  //   }
  // }

}

class PiLine extends PiShape
{
  constructor(in_seg=5, {pos=[0,0], size=10, rot=0, anchor=.5}={})
  {
    super(pos);
    // this.pos = (pos instanceof Pi2D) ? pos : new Pi2D(pos[0],pos[1]);
    this.size = (size instanceof Pi1D) ? size : new Pi1D(size);
    this.rot = (rot instanceof Pi1D) ? rot : new Pi1D(rot);
    this.anchor = (anchor instanceof Pi1D) ? anchor : new Pi1D(anchor);
    this.seg = in_seg;

    for(let i=0; i<this.seg; i++)
    {
      let norm = float(i)/(this.seg-1);
      let polar = new Pi2D_Polar({pos:this.pos, rad:new Pi1D_Mlt(this.size, (new Pi1D_Add(this.anchor,-norm)) /*(norm*2-1)*.5*/), rot:this.rot});
      this.points[i] = new PiVertex(polar,{uv:[norm,0]});
    }
  }

  setSize(in_size)
  {
    if(in_size instanceof Pi1D)
    {
      this.size = in_size;
    }else {
      this.size.setValue(in_size);
    }
    return(this);
  }

  setRot(in_rot)
  {
    if(in_rot instanceof Pi1D)
    {
      this.rot = in_rot;
    }else {
      this.rot.setValue(in_rot);
    }
    return(this);
  }

  setAnchor(in_anchor)
  {
    if(in_anchor instanceof Pi1D)
    {
      this.anchor = in_anchor;
    }else {
      this.anchor.setValue(in_anchor);
    }
    return(this);
  }

  cook()
  {
    this.pos.cook();
    this.size.cook();
    this.rot.cook();
    for(let i=0; i<this.seg; i++)
    {
      this.points[i].cook();
    }
  }
}

class PiPoly extends PiShape
{
  constructor(in_seg=5, {pos=[0,0], size=10, rot=0}={})
  {
    super(pos);

    // this.pos = (pos instanceof Pi2D) ? pos : new Pi2D(pos[0],pos[1]);
    this.size = (size instanceof Pi1D) ? size : new Pi1D(size);
    this.rot = (rot instanceof Pi1D) ? rot : new Pi1D(rot);
    this.seg = in_seg;

    for(let i=0; i<this.seg; i++)
    {
      let norm = float(i)/this.seg;
      let polar = new Pi2D_Polar({pos:this.pos, rad:this.size, rot:new Pi1D_Add(this.rot, norm)});
      this.points[i] = new PiVertex(polar,{uv:[norm,0]});
    }
  }

  setSize(in_size)
  {
    if(in_size instanceof Pi1D)
    {
      this.size = in_size;
      for(let i=0; i<this.seg; i++)         /// this shouldn't be necessary if points.pos.rad point to this.size properly
      {
        this.points[i].pos.setRad(this.size);
      }
    }else {
      this.size.setValue(in_size);
    }
    return(this);
  }

  setRot(in_rot)
  {
    if(in_rot instanceof Pi1D)
    {
      this.rot = in_rot;
      for(let i=0; i<this.seg; i++)         /// this shouldn't be necessary if points.pos.rot point to this.rot properly
      {
        this.points[i].pos.rot.setA(this.rot);
      }
    }else {
      this.rot.setValue(in_rot);
    }
    return(this);
  }

  cook()
  {
    this.pos.cook();
    this.size.cook();
    this.rot.cook();
    for(let i=0; i<this.seg; i++)
    {
      this.points[i].cook();
    }
  }
}

class PiGrid extends PiShape
{
  constructor(in_seg=[5,5], {pos=[0,0], size=[10,10]}={})
  {
    super(pos);

    // this.pos = (pos instanceof Pi2D) ? pos : new Pi2D(pos[0],pos[1]);
    this.size = (size instanceof Pi2D) ? size : new Pi2D(size[0],size[1]);
    this.wCount = in_seg[0];
    this.hCount = in_seg[1];

    for(let x=0; x<this.wCount; x++)
    {
      let u = float(x)/this.wCount;
      let xPos = new Pi1D_Mlt(u,this.size.x);

      for(let y=0; y<this.hCount; y++)
      {
        let v = float(y)/this.hCount;
        let id = x + y * this.wCount;
        let yPos = new Pi1D_Mlt(v,this.size.y);
        this.points[id] = new PiVertex(new Pi2D_Add([xPos,yPos],this.pos),{uv:[u,v]});
      }
    }
  }

  getCell(in_x, in_y)
  {
    return(this.points[in_x+in_y*this.wCount]);
  }

  cook()
  {
    // print(this.points.sizegth);
    this.pos.cook();
    this.size.cook();
    // console.log(this.points);
    for(let i=0; i<this.points.length; i++)
    {
      this.points[i].cook();
    }
  }
}
class Pi1D_Timer extends Pi1D
{
  constructor(in_rate)
  {
    super(0);
    this.rate = in_rate;
    this.isPlaying = false;
  }

  play()
  {
    this.isPlaying = true;
  }

  pause()
  {
    this.isPlaying = false;
  }

  reset()
  {
    this.value = 0;
  }

  cook()
  {
    if(this.isPlaying)
    {
      this.value += this.rate;
    }
  }
}

class Pi1D_Framer extends Pi1D
{
  constructor(in_timeStep, in_valueStep)
  {
    super(0);
    this.timeStep = in_timeStep;
    this.valueStep = in_valueStep;
    this.lastStep = 0;
    this.isPlaying = true;
  }

  play()
  {
    this.isPlaying = true;
  }

  pause()
  {
    this.isPlaying = false;
  }

  reset()
  {
    this.value = 0;
  }

  cook()
  {
    if(this.isPlaying)
    {
      // let current = floor(millis()/(this.timeStep*1000));
      let current = floor(frameCount/this.timeStep);
      if(current-this.lastStep>0)
      {
        this.value += this.valueStep;
        this.lastStep = current;
      }
    }
  }
}

class PiTool
{
  constructor()
  {
    // this.params = new PiParamManager();
    this.objects = new PiObjectHolder();
    this.cookID = 0;

    this.layers = [];

  }


  cook()
  {
    this.cookID++;
  }


  newObject(in_name, in_params)
  {
    return(this.objects.new(in_name, in_params));
  }

  addObject(in_obj)
  {
    return(this.objects.add(in_obj));
  }

  getObject(in_name)
  {
    return(this.objects.get(in_name));
  }

  addLayer(in_w, in_h)
  {
    let l = new PiLayer(in_w,in_h);
    this.layers.push(l);
    return(l);
  }


    drawLayers()
    {
      for(let l of this.layers)
      {
        l.draw();
      }
    }

}

~pat = "10101110100100001111000011110110001000110011111111111100000101000101110001111111100000101000011000100000001000100101101011110010000111110100010101111111000001010110110101111111101000011010000011010110011101000011110101111101100001100011001101010111101001100011011001100011110011011111101111001001011"

~pat = "10101110100101001010000000110000101101110101011110011101111001000100110011010010011111010100000100001000011110100010011111111001100011101100100111001010100010010010011110011100110110001010001010111111110101100101001001110110110101101110111110101100010010001101111010111111101011110010100000101110111"


~patar = []; ~pat.do({|x| x.postln; ~patar = ~patar.add(x.asInteger - 48)})
while ({~patar.size % 8 > 0}) {~patar = [0] ++ ~patar}
z

[0] ++ ~patar
~pat

~pat[0].asInteger
~patar
"0".asInteger

~patar

OSCFunc.trace(false, false)



c = Buffer.read(s, "/home/bgola/workspace/samples/Vintage Drum Samples 24bit/Roland TR-909/TR-909Snare 02.wav");
x =  Buffer.read(s, "/home/bgola/workspace/samples/JLZ/jlzkick/Kick (01).wav");
k = Buffer.read(s, "/home/bgola/workspace/samples/Vintage Drum Samples 24bit/Roland TR-909/TR-909Kick 10.wav");
l = Buffer.read(s, "/home/bgola/workspace/samples/VHOORDURMKIT/vhsnare/3-PESADO.wav");
h = Buffer.read(s, "/home/bgola/workspace/samples/n0p/n0phatx/JMX HH AB02-02.wav");


~pat = "10101110100101001010000000110000101101110101011110011101111001000100110011010010011111010100000100001000011110100010011111111001100011101100100111001010100010010010011110011100110110001010001010111111110101100101001001110110110101101110111110101100010010001101111010111111101011110010100000101110111"

~patar = []; ~pat.do({|x| x.postln; ~patar = ~patar.add(x.asInteger - 48)})
~rpat = []; ~curn = 0; ~cur = ~patar[0]; ~patar.do{|e| if(e == ~cur) {~curn=~curn+1}{~rpat = ~rpat.add(~curn); ~curn=1}; ~cur = e}

~patar.size / 2 / 8
~rpat
(
Ndef(\tx, {
	var spdfb = LocalIn.ar(2);
	var spd = Demand.ar(Trig1.ar(1) + spdfb[0], spdfb[1], Dseq(~rpat, inf));
	var tr = Impulse.ar(6 * spd);
	var count = Stepper.ar(tr, 0, 0, ~patar.size);
	var trfb = LocalOut.ar([tr,count < 1.0]);
	var bfreq = exprand(40,60);
	var v = Demand.ar(tr, 0, Dseq(~patar, inf));
	var tr1 = tr & v;
	var tr2 = Changed.ar(v) & (v < 1.0);
	var tr3 = tr & (v >  0.0);
	var tr4 = CoinGate.ar(0.0, tr & (1-v).abs);
	var kik = LPF.ar(Limiter.ar((PlayBuf.ar(1, k, 0.8, (tr2 | tr4)) * 10.neg.dbamp), 20.neg.dbamp) * 10.dbamp, 12000);
	var snr = PlayBuf.ar(1, c, 1, tr3) * 3.neg.dbamp;
	var bas = Limiter.ar((1-EnvGen.ar(Env.perc(0.01,0.19, 1, 2), tr2|tr4)) * DFM1.ar(PulseDPW.ar(bfreq * [1.0, 1.01], 0.5, 21.neg.dbamp), (1-EnvGen.ar(Env.perc([0.05,0.07],[0.5,0.45]/2,1.0, -6), tr2, 0.95, 0.0)) * (TExpRand.ar(4000, 16000, tr2|tr4)*SinOsc.ar([5,5.1]*2).exprange(0.25, 1)), 0.9), 0.neg.dbamp) * 15.neg.dbamp;
	var hit = EnvGen.ar(Env.perc(0.05, 0.009, 9), tr1) * (Pan2.ar(SinOsc.ar(bfreq*128 * TChoose.kr(count < 1.0, [1.0]),0,120.neg.dbamp), TRand.kr(0,0, count < 1.0)) + (Impulse.ar(3220)*10.neg.dbamp)) * 5.neg.dbamp;
	bas + hit + kik;
}).play;
)

~patar.size / 2 / 8
x = [1,2,3,4]

x.reshape(19,14)



~pat = "10101110100101001010000000110000101101110101011110011101111001000100110011010010011111010100000100001000011110100010011111111001100011101100100111001010100010010010011110011100110110001010001010111111110101100101001001110110110101101110111110101100010010001101111010111111101011110010100000101110111"

~pat = "10101110100100001111000011110110001000110011111111111100000101000101110001111111100000101000011000100000001000100101101011110010000111110100010101111111000001010110110101111111101000011010000011010110011101000011110101111101100001100011001101010111101001100011011001100011110011011111101111001001011"


~patar = []; ~pat.do({|x| x.postln; ~patar = ~patar.add(x.asInteger - 48)})
~rpat = []; ~curn = 0; ~cur = ~patar[0]; ~patar.do{|e| if(e == ~cur) {~curn=~curn+1}{~rpat = ~rpat.add(~curn); ~curn=1}; ~cur = e}
n = ~patar.reshape((~patar.size/32).asInteger, 32)

n = ~patar.reshape(16, 16).scramble
n.plot

n.size
z = [1,2,3]
z.pop
z
n
n.plot


OSCFunc.trace(false, false)

r = NetAddr("localhost", 57142);

k.bufnum
k.play
m.play
k = Buffer.read(s, "/home/bgola/workspace/samples/Vintage Drum Samples 24bit/Roland TR-909/TR-909Kick 10.wav");
m = Buffer.read(s, "/home/bgola/tmp/whike.wav");

(
fork {
10.do {
Ndef(\tx2).fadeTime = 1;
Ndef(\tx2).stop;
0.7.wait;
Ndef(\tx2).clear;
0.4.wait;
n = n.scramble;
OSCdef(\tr, {|msg|  r.sendMsg('/trig', *msg[3..]) }, '/trig');
Ndef(\tx2, {
	var freq = exprand(7,15)/rrand(0.5,2);
	var spdfb = LocalIn.kr(2);
	var spdtr = Demand.kr(Trig1.kr(1) + spdfb[0], spdfb[1], Dseq(n[0], inf));
	var spd = Demand.kr(Trig1.kr(1) + spdtr, 0, Dseq([0.5,1,2,3,4].scramble, inf));
	var tr = Impulse.kr(freq/2 * spd) | Impulse.kr(freq/2 * spd, 0.5 + rrand(-0.05,0.05));
	var trfb = LocalOut.kr([tr,0.0]);
	var ch = n.size.rand;
	var kick;
	var snd = n[1..].collect({|pat,i|
		var pa = pat[..(pat.size.rand)+1].postln;
		//var pa = pat.postln;
		var round = K2A.ar(Stepper.kr(tr, 0, 0, pa.size) > 1.0);
		var seq = Demand.kr(tr, 0, Dseq(pa, inf));
		var sample = m;
		var pos = (m.sampleRate * m.duration).rand;
		var rate = rrand(0.5, 8.0) * [-1,1].choose - (spd/6.0);
		var ssnd;
		var pan = 0;
		if (i == ch) {
			sample = k;
			pos = 0;
			rate = rrand(0.5, 1)+(spd/20.0);
			kick = LPF.ar(Limiter.ar((PlayBuf.ar(1, sample, rate, tr&seq) * 2.dbamp).tanh, 50.neg.dbamp) * 44.dbamp, 18000);
			ssnd = Silence.ar;
		} {
			pan = TRand.ar(-1.0, 1.0, round).lag(1);
			ssnd = Pan2.ar(EnvGen.ar(Env.perc(exprand(0.0001,1).pow(1.4), rrand(0.01,0.7)), tr&seq) * Normalizer.ar(PlayBuf.ar(1, sample, rate, tr&seq, pos, 25.neg.dbamp)), pan, 10.neg.dbamp);
		};
		SendReply.kr(tr&seq, '/trig', [i,BinaryOpUGen('==', sample.bufnum, k.bufnum),pos/sample.sampleRate/sample.duration,rate,pan,spd]);
		ssnd;
	});

	Compander.ar(Mix.ar(snd), kick, -29.dbamp, 1, 0.5, 0.05, 0.002, 0.4) + kick;
}).play;
12.wait;
}
}
)

Ndef(\master, {ReplaceOut.ar(0, DelayN.ar(Ndef(\tx2).ar(2), 0.2, 0.2))})



Array
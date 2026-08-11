M5 (Modulacions 5): Pulses 

-NOTES:

-'Click' to START/pause.

-Save current frame to PNG-> press 'S'.

-Save 5 s. animation to GIF-> press 'G'

-100% code generated (no images or sounds preloaded)

-All audio stuff is done with WebPd.

-All visual is done with p5js.

-Chrome browser recommended

-Headphones recomended. Some extreme sounds (frequency and amplitude) can be generated.

-Supply can be halved/reduced and/or the price can be doubled if all iterations have not been minted (every 24h aprox).

DESCRIPTION:

-A step sequencer can shot 6 different pulses: base, beep1, beep2, beep3, bass and noise. 

-At the end of each cicle/pattern, one of the steps changes, so it creates an unique and infinite sequence of sounds. 

-Each cicle has a number of "sounds"-> columns x rows.

-Various visualizations patterns

-the frequency of the main pulse (base) is defined by the piece's ITERATION number (from 1 to 256). Odd numbers are assigned a midi value sequentially from 1 to 128, and even numbers are sequentially assigned a value from 257 to 129.

FEATURES:
-"seed":number of minter random seed. (It's not really a seed. Each time it is sent to the $fx.randminter() function, it is done 5 times and the results are sequenced. It gives more flexibility to the minter.)
-"fx_iteration": number of iteration
-"base_midi": Frequency of base pulse (midi)-> depends on iteration number.
-"visual": type of visualization,
-"num_sounds": number of sounds per cicle.
-"pattern_length": length of sequence pattern (can not be greater than num_sounds).
-"random_order": true->random order
-"dark": dark (true) or light(false).
-"alpha": alpha value for past steps (from 0 to 50).
-"BPM": Beats Per Minute.
-"bass_prob": Probability of bass pulse.
-"beep_prob": Probability of beep1 pulse.
-"noise_prob": Probability of nosie pulse.

PARAMS GUIDE:

·random seed: Select one of five seed of random function.
·visual: Select one of 7 possible visualizations modes.
·num.rows: number of rows (apply for grid visualizations).
·num.columns: number of columns (apply for grid visualizations).

	->NOTE: in non-grid visualizations, number total of sounds for each cicle is calculated by num.rows x num.columns.
	If the number of sounds is very high, it can cause performance problems in some devices.

·pattern length: You can choose the length of sequence pattern or an infinite pattern (no pattern). (max length = num.cols x num.rows)

·random order: chose random order (check) or sequential order (uncheck).

·dark mode: dark mode (check) or light mode (uncheck)

·alpha: alpha value of played sounds (from 0 to 50)

·BPM: Beats Per Minute. 

·bass prob.:  probability of Bass sound.

·beep prob.: probability of Beep1 sound.

·noise prob.: probability of noise sound. 






import * as Tone from 'tone';

let synth: Tone.PluckSynth | null = null;
let polySynth: Tone.PolySynth<Tone.PluckSynth> | null = null;
let vibrato: Tone.Vibrato | null = null;
let distortion: Tone.Distortion | null = null;
let reverb: Tone.Reverb | null = null;
let isMuted = false;

const initializeSynth = () => {
  if (!reverb) {
    reverb = new Tone.Reverb(2).toDestination();
  }
  if (!distortion) {
    distortion = new Tone.Distortion(0.2).connect(reverb);
  }
  if (!vibrato) {
    vibrato = new Tone.Vibrato(5, 0.1).connect(distortion);
  }
  if (!synth) {
    synth = new Tone.PluckSynth().connect(vibrato);
  }
  if (!polySynth) {
    polySynth = new Tone.PolySynth({ voice: Tone.Synth }).connect(vibrato);
  }
};

export const playNote = (note: string) => {
  if (isMuted) return;
  initializeSynth();
  Tone.start();
  synth?.triggerAttackRelease(note, '4n');
};

export const playChord = (notes: string[]) => {
  if (isMuted) return;
  initializeSynth();
  Tone.start();
  polySynth?.triggerAttackRelease(notes, '2n');
};

export const toggleMute = () => {
  isMuted = !isMuted;
  return isMuted;
};

export const getIsMuted = () => {
  return isMuted;
};

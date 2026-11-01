// Design tokens, mirrored from the `ChronoMap Tokens` variable collection in Figma
// (file nGpbcLweFWROFc3oaonWrO, page "Page 1 - Hi Fi"). Keep the two in step.
//
// The A2 prototype was greyscale low-fi. This is the A3 high-fidelity pass: a warm paper ground,
// deep archival blue as the ink, and golden-hour amber reserved for the two things that have to
// stand out - capture conditions, and the host.
export const C = {
  bg: '#F6F5F2',
  surface: '#FFFFFF',
  surfaceAlt: '#EDEBE6',
  placeholder: '#E2DFD8',
  border: '#DCD9D2',
  borderStrong: '#C3BFB6',
  // A side of the landmark that still needs photos. This started life as `borderStrong`, but
  // that token is a border colour at 1.68:1 and the radar was using it to say something, which
  // is a 3:1 job. Splitting the two kept 25 borders light and gave the 10 meaningful dots a
  // colour that can actually be seen.
  thin: '#908D87',

  text: '#15171C',
  textDim: '#676B75',
  onInk: '#FFFFFF',

  ink: '#1E3A5F',
  inkSoft: '#E8EDF4',

  amber: '#E0892E',
  amberSoft: '#FBEEDC',
  // `amber` is 2.47:1 on the paper ground, so it is a fill only: it sits behind dark text and
  // never carries any. Where amber itself has to be read - an icon, a word, a number - use this
  // darker cast instead, which clears 4.5:1. Darkening `amber` was rejected because it is the
  // brand colour and appears on every screen.
  amberInk: '#9F6121',

  success: '#2E7D5B',
  successSoft: '#E3F1EA',

  live: '#C34437',
  liveSoft: '#FBE7E4',

  // The participant's own position marker on the coverage radar. Deliberately the blue every
  // map application uses for "you are here", so it reads as self without needing a label.
  // Added after the evaluation: PQ-2 could describe the old amber marker accurately ("several
  // dots", "the yellow thing") and still not know it meant them. Not for any other purpose.
  location: '#0071ED',
  locationSoft: 'rgba(0,113,237,0.18)',
};

export const R = { sm: 8, md: 12, lg: 16, xl: 22, pill: 999 };
export const S = { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24 };

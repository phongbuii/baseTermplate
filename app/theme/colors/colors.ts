// TODO: write documentation for colors and palette in own markdown file and add links from here
import R from "@app/assets"
const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#DEE2E6",
  neutral500: "#978F8A",
  neutral600: "#868E96",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  primary100: "#F4E0D9",
  primary200: "#E8C1B4",
  primary300: "#DDA28E",
  primary400: "#D28468",
  primary500: "#228BE6",
  primary600: "#A54F31",
  
  primary700: "#9FCAFF",
  
  primary800: "#0061A5",


  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",

  outline100: "#FFF6F4",
  outline200:"#FFF8EA",
  outline300: "#EDF4F4",
  
  success: "#E6F2E5",
  success_add: "#0D5E06",
  
  column_chart: "#F69679",
  
  describe:"#73777F"
  
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral800,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral200,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: R.colors.primary,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: R.colors.red_5,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,

  primaryDim: palette.primary700,

  card: palette.primary800,
  
  card_chart1: palette.outline100,
  
  card_chart2: palette.outline200,
  
  card_chart3: palette.outline300,
  
  success: palette.success,
  
  success_add: palette.success_add,
  
  column_chart: palette.column_chart,
  
  describe:palette.describe


  
}

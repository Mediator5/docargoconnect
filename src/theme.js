// ============================================
// D&O Cargo Connect — Global Theme Config
// Change colors, fonts, and spacing here ONLY
// and they will update across the entire site.
// ============================================

export const colors = {
  // Brand primaries — from logo
  purple: {
    deep:   '#1E0A4F',   // darkest purple (hero bg, footer bg)
    mid:    '#2D0F6B',   // main brand purple (dark sections)
    light:  '#3D1A8A',   // lighter purple (hover states)
  },
  gold: {
    DEFAULT: '#F5C518',  // primary gold (CTAs, accents)
    dark:    '#D4A800',  // darker gold (text stroke)
    light:   '#FFD94D',  // lighter gold (gradients)
  },
  green: {
    DEFAULT: '#1A8A3C',  // brand green (secondary accents)
    dark:    '#146B2E',
    light:   '#22A84A',
  },

  // Neutral
  white:    '#FFFFFF',
  gray: {
    50:  '#F9FAFB',      // light section backgrounds
    100: '#F3F4F6',
    400: '#9CA3AF',      // subtle text
    500: '#6B7280',      // body text
    700: '#374151',      // dark body text
    800: '#1F2937',      // headings on white
  },
};

export const fonts = {
  heading: "'Barlow Condensed', sans-serif",   // all headings, stats, badges
  body:    "'Barlow', sans-serif",             // all body text, inputs
};

export const fontWeights = {
  regular:    400,
  medium:     500,
  semibold:   600,
  bold:       700,
  extrabold:  800,
  black:      900,
};

export const radius = {
  sm:   8,
  md:   12,
  lg:   16,
  xl:   18,
  full: 999,
};

export const spacing = {
  sectionY:  '96px',   // vertical padding for all sections
  containerX: '24px',  // horizontal padding for all containers
  maxWidth:   1200,    // max content width
};

// ============================================
// Reusable style helpers built from the theme
// ============================================

export const sectionTag = (variant = 'purple') => ({
  display: 'inline-block',
  fontFamily: fonts.heading,
  fontWeight: fontWeights.bold,
  fontSize: '0.7rem',
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  padding: '5px 14px',
  borderRadius: radius.full,
  marginBottom: 16,
  ...(variant === 'purple' && {
    background: `rgba(45,15,107,0.07)`,
    color: colors.purple.mid,
  }),
  ...(variant === 'gold' && {
    background: `rgba(245,197,24,0.1)`,
    color: colors.gold.DEFAULT,
    border: `1px solid rgba(245,197,24,0.25)`,
  }),
  ...(variant === 'green' && {
    background: `rgba(26,138,60,0.08)`,
    color: colors.green.DEFAULT,
  }),
});

export const sectionHeading = (color = colors.purple.deep) => ({
  fontFamily: fonts.heading,
  fontWeight: fontWeights.black,
  lineHeight: 0.95,
  letterSpacing: '0.01em',
  color,
});

export const cardStyle = {
  background: colors.white,
  border: `1px solid rgba(30,10,79,0.09)`,
  borderRadius: radius.xl,
  padding: 32,
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
};

export const darkCardStyle = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.09)',
  borderRadius: radius.xl,
  padding: 28,
};

export const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: radius.md,
  border: `1px solid rgba(45,15,107,0.15)`,
  fontSize: '0.88rem',
  fontFamily: fonts.body,
  background: colors.white,
  outline: 'none',
  color: colors.gray[800],
};

export const gradients = {
  heroBg:      `linear-gradient(135deg, ${colors.purple.deep} 0%, ${colors.purple.mid} 60%, #1a1a50 100%)`,
  purpleDark:  `linear-gradient(135deg, ${colors.purple.deep} 0%, ${colors.purple.mid} 100%)`,
  gold:        `linear-gradient(135deg, ${colors.gold.DEFAULT}, ${colors.gold.light})`,
  topBar:      `linear-gradient(90deg, ${colors.gold.DEFAULT}, ${colors.green.DEFAULT}, ${colors.gold.DEFAULT})`,
};

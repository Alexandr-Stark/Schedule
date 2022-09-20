// Styles
import theme from 'styles/theme';

export const getControlButtonColorByType = (type) => {
  switch (type) {
    case 'close':
      return {
        border: theme.colors.darkRed,
        bgrnd: theme.colors.lightRed,
      }
    case 'hide':
      return {
        border: theme.colors.darkYellow,
        bgrnd: theme.colors.lightYellow,
    } 
    case 'min/max':
      return {
        border: theme.colors.darkGreen,
        bgrnd: theme.colors.lightGreen,
    } 
  
    default:
      return {
        border: '',
        bgrnd: '',
    }
  }
};

console.log(getControlButtonColorByType('close').bgrnd);
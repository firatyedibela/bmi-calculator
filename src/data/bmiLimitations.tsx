import iconGender from '../assets/images/icon-gender.svg';
import iconAge from '../assets/images/icon-age.svg';
import iconMuscle from '../assets/images/icon-muscle.svg';
import iconPregnancy from '../assets/images/icon-pregnancy.svg';
import iconRace from '../assets/images/icon-race.svg';

type limitation = {
  title: string;
  description: string;
  icon: string;
};

export const limitations: limitation[] = [
  {
    title: 'Gender',
    description:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
    icon: iconGender,
  },
  {
    title: 'Age',
    description:
      'In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.',
    icon: iconAge,
  },
  {
    title: 'Muscle',
    description:
      "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
    icon: iconMuscle,
  },
  {
    title: 'Pregnancy',
    description:
      'Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.',
    icon: iconPregnancy,
  },
  {
    title: 'Race',
    description:
      'Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.',
    icon: iconRace,
  },
];

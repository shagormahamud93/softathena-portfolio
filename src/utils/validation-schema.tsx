import * as Yup from 'yup';


// form style One
export const form_style_one_schema = Yup.object().shape({
  fname: Yup.string().required().label("First Name"),
  lname: Yup.string().required().label("Last Name"),
  phone: Yup.string().required().min(11).label("Phone Number"),
  password: Yup.string().required().min(6).label("Password"),
  massage: Yup.string().required().min(20).label("Massage"),
});
// form style Two
export const form_style_two_schema = Yup.object().shape({
  fname: Yup.string().required().label("First Name"),
  lname: Yup.string().required().label("Last Name"),
  phone: Yup.string().required().min(11).label("Phone Number"),
  password: Yup.string().required().min(6).label("Password"),
  massage: Yup.string().required().min(20).label("Massage"),
});
// form style Three
export const form_style_three_schema = Yup.object().shape({
  fname: Yup.string().required().label("First Name"),
  lname: Yup.string().required().label("Last Name"),
  phone: Yup.string().required().min(11).label("Phone Number"),
  password: Yup.string().required().min(6).label("Password"),
  massage: Yup.string().required().min(20).label("Massage"),
});
// form style Four
export const form_style_four_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().min(11).label("Phone Number"),
  subject: Yup.string().required().label("Subject"),
  massage: Yup.string().required().min(20).label("Massage"),
});
// form style Five
export const form_style_five_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().min(11).label("Phone Number"),
  subject: Yup.string().required().label("Subject"),
  massage: Yup.string().required().min(20).label("Massage"),
});
// form style Six
export const form_style_six_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().min(11).label("Phone Number"),
  subject: Yup.string().required().label("Subject"),
  massage: Yup.string().required().min(20).label("Massage"),
});
// form style eight
export const form_style_eight_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  subject: Yup.string().required().label("Subject"),
  massage: Yup.string().required().min(20).label("Massage"),
});

export const register_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  passwordConfirmation: Yup.string()
    .test('passwords-match', 'Passwords must match', function (value) {
      return value === this.resolve(Yup.ref('password')) || value === null;
    }),
});

export const login_schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});
//forgot schema
export const forgotten_schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email")
});
//service contact form schema
export const service_contact = Yup.object().shape({
  name: Yup.string().required().label("First Name"),
  email: Yup.string().required().email().label("Email"),
  massage: Yup.string().required().min(20).label("Massage"),
});
//leave replay form schema
export const leave_reply = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  comment: Yup.string().required().min(20).label("Comment"),
});



import * as emailjs from 'emailjs-com';

interface templateParams{
  firstName: string,
    email: string
    phone: number
    message: string
}
export const emailSend = (objectEmail) => {
  const emailData = JSON.parse(objectEmail);
  const {
    firstName,
    email,
    phone,
    message,
  } = emailData;

  const service_id = 'service_16pspkp';
  const template_id = 'template_lk4f9zg';
  const user_id = 'user_BZ6TELUu4kYqjUYYqHzta';

  let templateParams:templateParams = {
    firstName,
    email,
    phone,
    message,
  };

  emailjs.send(service_id, template_id, templateParams, user_id).then(
    function (response) {
      alert('your message has been sent, Thank you!');
      // console.log('SUCCESS!', response.status, response.text);
    },
    function (error) {
      console.log('FAILED...', error);
    }
  );
};

export const inputClasses = `w-full px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:text-white  dark:border-gray-600  dark:focus:border-gray-500 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm `

export const labelClasses = "block mb-2 text-sm font-semibold font-display text-words-light dark:text-words-dark"

export const errorClasses ="text-red-400 text-lg"


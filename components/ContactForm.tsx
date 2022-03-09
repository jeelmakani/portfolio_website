import React, { useMemo } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input, useInput, Textarea, Button } from "@nextui-org/react";
import style from "./ContactForm.module.scss";
import { test } from "linkifyjs";
import Image from "next/image";
import formPic from "../assets/formPic.svg";

interface Helper {
  text: any;
  color: any;
}

const ContactFormText = () => {
  const validateEmail = useMemo(() => test, []);

  const [state, handleSubmit] = useForm("meqnkjya");

  const { value: email, reset, bindings } = useInput("");

  const helper: Helper = React.useMemo(() => {
    if (!email)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(email);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [email, validateEmail]);

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form className={`flex flex-col ${style.form}`} onSubmit={handleSubmit}>
      <Input
        size="lg"
        clearable
        shadow={false}
        helperText="Please enter your name"
        width="20em"
        type="text"
        label="First and Last name"
        placeholder="Enter your first and last name here"
      />

      <Input
        size="lg"
        {...bindings}
        clearable
        shadow={false}
        onClearClick={reset}
        status={helper.color}
        color={helper.color}
        helperColor={helper.color}
        helperText={helper.text}
        width="20em"
        type="email"
        label="Email Address"
        placeholder="Enter your Email here "
      />

      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <Textarea
        bordered
        color="secondary"
        label="Write Message"
        labelPlaceholder="Enter your Message here"
      />

      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <Button color="gradient" type="submit" disabled={state.submitting}>
        Submit
      </Button>
    </form>
  );
};

function ContactForm() {
  return (
    <section className={`${style.formsection}`}>
      <Image src={formPic} alt="Form Img" width={500} height={500} />
      <div className={`${style.questionform}`}>
        <ContactFormText />
      </div>
    </section>
  );
}
export default ContactForm;

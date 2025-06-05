import React from "react";
import styled from "styled-components";
import backgroundImg from "../assets/who-we-are-main-bg.webp"; // replace with your correct image path


const ContactUs = () => {
  const StyledWrapper = styled.div`
    .form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 550px;
      padding: 20px;
      border-radius: 20px;
      position: relative;
    }

    .title {
      font-size: 28px;
      color: royalblue;
      font-weight: 600;
      letter-spacing: -1px;
      position: relative;
      display: flex;
      align-items: center;
      padding-left: 30px;
    }

    .title::before,
    .title::after {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      border-radius: 50%;
      left: 0px;
      background-color: royalblue;
    }

    .title::before {
      width: 18px;
      height: 18px;
      background-color: royalblue;
    }

    .title::after {
      width: 18px;
      height: 18px;
      animation: pulse 1s linear infinite;
    }

    .message,
    .signin {
      color: rgba(88, 87, 87, 0.822);
      font-size: 14px;
    }

    .signin {
      text-align: center;
    }

    .signin a {
      color: royalblue;
    }

    .signin a:hover {
      text-decoration: underline royalblue;
    }

    .flex {
      display: flex;
      width: 100%;
      gap: 6px;
    }

    .form label {
      position: relative;
    }

    .form label .input {
      width: 100%;
      padding: 10px 10px 20px 10px;
      outline: 0;
      border: 1px solid rgba(105, 105, 105, 0.397);
      border-radius: 10px;
    }

    .form label .input + span {
      position: absolute;
      left: 10px;
      top: 15px;
      color: grey;
      font-size: 0.9em;
      cursor: text;
      transition: 0.3s ease;
    }

    .form label .input:placeholder-shown + span {
      top: 15px;
      font-size: 0.9em;
    }

    .form label .input:focus + span,
    .form label .input:valid + span {
      top: 30px;
      font-size: 0.7em;
      font-weight: 600;
    }

    .form label .input:valid + span {
      color: green;
    }

    .submit {
      border: none;
      outline: none;
      background-color: royalblue;
      padding: 10px;
      border-radius: 10px;
      color: #fff;
      font-size: 16px;
      transform: 0.3s ease;
    }

    .submit:hover {
      background-color: rgb(56, 90, 194);
    }

    // @keyframes pulse {
    //   from {
    //     transform: scale(0.9);
    //     opacity: 1;
    //   }

    //   to {
    //     transform: scale(1.8);
    //     opacity: 0;
    //   }
    // }
  `;

  return (
    <StyledWrapper>
      <div
        className="relative bg-cover bg-center bg-no-repeat text-white min-h-[80vh]  flex items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-8xl font-bold uppercase leading-tight">
            CONTACT <span className="text-blue-500">US</span>
          </h1>
        </div>
      </div>
      <div className="contact-form-section font-lexend py-24 bg-black">
        <form className="form mx-auto ">
        <div className="flex">
          <label className="w-[50%]">
            <input required placeholder type="text" className="input w-full" />
            <span>Firstname</span>
          </label>
          <label className="w-[50%]">
            <input required placeholder type="text" className="input w-full" />
            <span>Lastname</span>
          </label>
        </div>
        <label>
          <input required placeholder type="email" className="input" />
          <span>Email</span>
        </label>
        <label>
          <input required placeholder type="password" className="input" />
          <span>Password</span>
        </label>
        <label>
          <input required placeholder type="password" className="input" />
          <span>Confirm password</span>
        </label>
        <button className="submit">Submit</button>
        <p className="signin">
          Already have an acount ? <a href="#">Signin</a>{" "}
        </p>
      </form>
      </div>
      
    </StyledWrapper>
  );
};

export default ContactUs;

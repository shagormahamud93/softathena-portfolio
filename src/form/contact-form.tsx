"use client"
import React from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { form_style_one_schema } from '@/utils/validation-schema';
import ErrorMsg from './FormErrorMsg/ErrorMsg';
import ErrorMsgTwo from './FormErrorMsg/ErrorMsgTwo';
type TFromProps = {
    fromWrapperClass?: string;
}
const ContactForm = ({ fromWrapperClass }: TFromProps) => {
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
        useFormik({
            initialValues: {
                fname: "",
                lname: "",
                phone: "",
                password: "",
                massage: ""
            },
            validationSchema: form_style_one_schema,
            onSubmit: (values, { resetForm }) => {
                toast.success("Success! Your submission is now complete. Well done!");
                resetForm();
            },
        });
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row g-5 align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className="from__input-box">
                            <div className={`form__input ${fromWrapperClass ? fromWrapperClass : "style-two"}`}>
                                <input
                                    type="text"
                                    name="fname"
                                    value={values.fname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    placeholder="First Name"
                                />
                            </div>
                            {touched.fname && <ErrorMsg error={errors.fname} />}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="from__input-box">
                            <div className={`form__input ${fromWrapperClass ? fromWrapperClass : "style-two"}`}>
                                <input
                                    name="lname"
                                    id="lname"
                                    type="text"
                                    value={values.lname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    placeholder="Last name" />
                                {touched.lname && <ErrorMsg error={errors.lname} />}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="from__input-box">
                            <div className={`form__input ${fromWrapperClass ? fromWrapperClass : "style-two"}`}>
                                <input
                                    type="text"
                                    name='phone'
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    placeholder="Phone Number" />
                                {touched.phone && <ErrorMsg error={errors.phone} />}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="from__input-box">
                            <div className={`form__input ${fromWrapperClass ? fromWrapperClass : "style-two"}`}>
                                <input
                                    type="password"
                                    name='password'
                                    placeholder="Password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                />
                                {touched.password && <ErrorMsg error={errors.password} />}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="from__input-box">
                            <div className={`form__input ${fromWrapperClass ? fromWrapperClass : "style-two"}`}>
                                <textarea cols={30} rows={10}
                                    name="massage"
                                    value={values.massage}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    id="massage"
                                    placeholder="Your Massage">
                                </textarea>
                                {touched.massage && <ErrorMsgTwo error={errors.massage} />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact__btn">
                    <button type='submit' className="bd-btn w-100">Submit now</button>
                </div>
            </form>
        </>
    );
};

export default ContactForm;
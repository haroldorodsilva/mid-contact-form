import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import './style.css'
type Inputs = {
    name: string
    email: string
    subject: string
    message: string
}

function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        alert('Success')
    }

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Contact Form</h2>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" {...register('name', { required: true })} />
                {errors.name && <span className='error'>This field is required</span>}
            </div>

            <div>
                <label htmlFor="email">E-mail</label>
                <input id="email" {...register("email", {
                    required: "Email is required",
                    validate: {
                        matchPattern: (v) =>
                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                            "Email address must be a valid address",
                    },
                })} />
                {errors.email?.message && <span className='error'>{errors.email.message}</span>}
            </div>

            <div>
                <label htmlFor="subject">Subject</label>
                <input id="subject" {...register('subject', { required: true })} />
                {errors.subject && <span className='error'>This field is required</span>}
            </div>


            <div>
                <label htmlFor="message">Message</label>
                <textarea rows={5} id="message" {...register('message', { required: true })} />
                {errors.message && <span className='error'>This field is required</span>}
            </div>

            <input type="submit" />
        </form>
    )
}

export default ContactForm;
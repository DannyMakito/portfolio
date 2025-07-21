import React,{Suspense, useState} from 'react'
import emailjs from "@emailjs/browser"
import Alert from '../components/Alert';

const Contact = () => {

const[formData, setFormData]= useState({name:" ",email:" ",message:" "});

const handleChange=(e)=>{

    setFormData({...formData,[e.target.name]: e.target.value})
}

const [isLoading, setIsLoading] = useState(false);

const [showAlert, setShowAlert] = useState(false);


const handleSubmit= async(e)=>{
    e.preventDefault();
    setIsLoading("true");

    try {
        console.log("Form  submitted:", formData);
        await emailjs.send("service_tz4yca4","template_9vm2ttf",{
            from_name: formData.name,
            to_name:"dan",
            from_email: formData.email,
            to_email:"makitoeyamba@gmaiil.com",
            message: formData.message
        },"Rp3vOt1CHOyJRVKds");      
        
        setIsLoading(false);
        setFormData({name:" ",email:" ",message:" "});
        alert("success");
    } catch (error) {
        setIsLoading(false);
        console.log(error);
        alert("failed");
    }

    
}

  return (
    <section className="relative flex items-center c-space section-spacing">
       {showAlert &&  <Alert  type={alertType}/>}
            <div className="flex flex-col items-center justify-center max-w-md
            border border-white/10 rounded-2xl bg-primary p-5">
                <div className='flex flex-col items-start w-full gap-5 mb-10'>
                    <h2 className='text-heading'>Lets talk</h2>
                    <p className="font-normal text-neutral-400">
                        Whether your looking to build a new website, improve your existing platform
                        or bring a unique project to life ,Im here to help
                    </p>
                </div>


                <form className='w-full' onSubmit={handleSubmit}>
                    <div className='mb-5'>
                        <label htmlFor='name' className='feild_label'>
                            Full Name
                        </label>
                        <input 
                        id="name"
                        name='name'
                        type='text'
                        className='field-input field-input-focus'
                        placeholder='Jonny Depp'
                        required
                        value={formData.name}
                        onChange={handleChange}
                        />

                    </div>

                    <div className='mb-5'>
                        <label htmlFor='name' className='feild_label'>
                            Email
                        </label>
                        <input 
                        id="email"
                        name='email'
                        type='text'
                        className='field-input field-input-focus'
                        placeholder='jonnydepp@gmail.com'
                        required
                        value={formData.email}
                        onChange={handleChange}
                        />

                    </div>

                    <div className='mb-5'>
                        <label htmlFor='name' className='feild_label'>
                            Message
                        </label>
                        <textarea
                        rows="4"
                        id="message"
                        name='message'
                        type='text'
                        className='field-input field-input-focus'
                        placeholder='share your thoughts'
                        required
                        value={formData.message}
                        onChange={handleChange}
                        />

                    </div>
                  
                    <button className='w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer
                    bg-radial from-lavender to-royal hover-animation' type='submit'>{!isLoading?"Send":"Sending..."}</button>
                </form>
            </div>
    </section>
  )
}

export default Contact
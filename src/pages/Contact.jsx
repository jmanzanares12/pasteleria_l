import React, { useState } from "react";
import { FiCalendar, FiMail, FiUser,FiPhone} from 'react-icons/fi';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        orderType: 'Personalizado',
        withdrawalDate:'',
        cakeSize:'',
        cakeType:'',
        flavors: [],
        decoration:'',
        quantity:'1',
        additionalNotes:''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]:value}));
    };

    const handleFlavorChange = (e) => {
        const flavors = e.target.value;
        setFormData(prev => ({
            ...prev,
            flavors: e.target.checked 
                ? [...prev.flavors, flavors]
                : prev.flavors.filter(flavor => flavor !== flavors)
        }))
    }

    return (
        <div className= 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            <h1 className="text-4xl md:text-5xl font-bold text-rose-800 mb-8">Contacto</h1>
        </div>
    );
};

export default Contact;
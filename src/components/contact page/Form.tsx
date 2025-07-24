import React, { useState } from "react";

const Form = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto mt-12 flex flex-col gap-6"
            autoComplete="off"
        >
            <div className="flex gap-6">
                <div className="flex-1 flex flex-col">
                    <label className="text-xs font-semibold text-[#06162c] mb-2" htmlFor="firstName">
                        FIRST NAME
                    </label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={form.firstName}
                        onChange={handleChange}
                        className="bg-gray-200 rounded-lg px-4 py-3 outline-none text-base"
                        autoComplete="off"
                    />
                </div>
                <div className="flex-1 flex flex-col">
                    <label className="text-xs font-semibold text-[#06162c] mb-2" htmlFor="lastName">
                        LAST NAME
                    </label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={form.lastName}
                        onChange={handleChange}
                        className="bg-gray-200 rounded-lg px-4 py-3 outline-none text-base"
                        autoComplete="off"
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <label className="text-xs font-semibold text-[#06162c] mb-2" htmlFor="email">
                    EMAIL
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-gray-200 rounded-lg px-4 py-3 outline-none text-base"
                    autoComplete="off"
                />
            </div>
            <div className="flex flex-col">
                <label className="text-xs font-semibold text-[#06162c] mb-2" htmlFor="message">
                    MESSAGE
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    className="bg-gray-200 rounded-lg px-4 py-3 outline-none text-base resize-none"
                />
            </div>
            <div className="flex justify-center mt-4">
                <button
                    type="submit"
                    className="bg-[#06162c] text-white rounded-full px-10 py-3 text-base font-medium hover:bg-[#0a2240] transition"
                >
                    Send
                </button>
            </div>
        </form>
    );
};

export default Form;
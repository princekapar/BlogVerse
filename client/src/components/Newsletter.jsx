import React from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "85cd9a97-8bed-48cc-ba50-3cc146771000");
    formData.append("subject", "New Newsletter Subscription");
    formData.append("from_name", "BlogVerse Newsletter");

    const loadingToast = toast.loading("Subscribing...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Subscribed successfully!", {
          id: loadingToast,
        });
        form.reset();
      } else {
        toast.error("Failed to subscribe. Try again.", {
          id: loadingToast,
        });
      }
    } catch (error) {
      toast.error("Network error. Please try later.", {
        id: loadingToast,
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 my-32 px-4">
      <h1 className="md:text-4xl text-2xl font-semibold">
        Never Miss a Blog!
      </h1>

      <p className="md:text-lg text-gray-500/70 max-w-xl">
        Subscribe to get the latest blogs, new tech updates, and exclusive news.
      </p>

      <form
        onSubmit={onSubmit}
        className="
          flex items-center
          max-w-2xl w-full
          h-12 md:h-14
          overflow-hidden
          rounded-full
          border border-gray-300
          focus-within:border-primary
        "
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          required
          className="flex-1 h-full px-2 outline-none"
        />

        <button
          type="submit"
          className="h-full px-2 md:px-10 bg-primary text-white"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;

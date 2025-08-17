const GithubLoginButton = ({ onclick, text = 'ورود با گیتهاب' }) => {
    return (
        <button
            onClick={onclick}
            className="flex w-full items-center justify-center gap-3 rounded-3xl
               bg-white px-4 py-2 mx-4 text-neutral-800
               shadow-sm ring-1 ring-neutral-200 transition-all
               hover:shadow-md hover:ring-neutral-300 cursor-pointer"
        >
            <img
                src="./assets/icons/github-142-svgrepo-com.svg"
                alt="github"
                className="h-5 w-5"
            />
            <span>{text}</span>
        </button>
    )
}

export default GithubLoginButton;
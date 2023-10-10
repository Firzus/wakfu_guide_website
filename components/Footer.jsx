const Footer = () => {
    return (
        <footer className="container mx-auto py-4 flex flex-col gap-2 px-3 md:px-8">
            <div className="w-full h-[2px] bg-white-100/20 md:hidden" />
            <p className="mx-auto text-center text-xs text-white-300 font-light ">
                Certaines images sont la propriété d’Ankama Studio.{' '}
                <span className="hidden md:inline">©2023 WakfuGuide.</span>
                <span className="md:hidden">
                    <br />
                    ©2023 WakfuGuide.
                </span>
            </p>
        </footer>
    );
};

export default Footer;
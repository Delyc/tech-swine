const PageWrapper = ({children} : any) => {
    return ( 
        <section className="px-6 lg:px-0 mx-auto max-w-[75rem]">
            {children}
        </section>
     );
}
 
export default PageWrapper;
const PageWrapper = ({children} : any) => {
    return ( 
        <section className="mx-auto max-w-[75rem]">
            {children}
        </section>
     );
}
 
export default PageWrapper;
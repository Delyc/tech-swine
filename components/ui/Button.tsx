const Button = ({className, text, onClick, icon} : any) => {
    return ( 
        <button className={`${className} py-4 px-10`} onClick={onClick}>{text}{icon}</button>
     );
}
 
export default Button;
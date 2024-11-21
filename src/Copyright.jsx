export default function Copyright(){

    const today = new Date();
    const currentYear = today.getFullYear();
    
    return (
        
        <div id="copyright">
        `Copyright {currentYear} &copy; Andrei Bogdan Georgescu`
        </div>
       
    )

}
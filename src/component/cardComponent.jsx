import "./cardStyle.css"
function CardComponent() {
  return (
    <div className="card">
                <div className="container">
                    <div className="content">
                <div className="text_aling">
                    <p className="title">Join our community</p>
                    <p className="subtitle">30-day, hassle-free money back guarantee</p>
                    <p className="text">Gain access to our full library of tutorials along with expert code reviews.
                    Perfect for any developers who are serious about honing their skills</p>
                </div>
                </div>
        </div>
        <div className="bottom">
            <div className="left">
                <div className="container">
                    <div className="content">
                        <p className="bottom_title_text">Monthly Subscription</p>
                        <p className="price"> <spam className="attention">$29</spam> per month</p>
                        <p className="justificativa">Full access for less than $1 a day</p>
                        <button className="Sign_Up">Sign Up</button>
                    </div>
                </div>

            </div>
            <div className="right">
                <div className="right_container">
                <div className="right_content">
                    <p className="bottom_title_text">Why Us</p>
                    <p className="right_justificativa">Tutorials by industry experts Peer & expert code review Coding exercises Access to our GitHub repos Community forum Flashcard decks New videos every week</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default CardComponent;
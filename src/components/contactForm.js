import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form onSubmit={this.submitForm} action="https://formspree.io/f/mnqobpoz" method="POST">
       
        <div style={{ padding: '0px 0px 10px 0px', margin: '0px 0px 30px 0px' }}>
          <label for="email"><p>Email</p>
            <input type="email" name="email" id="email" />
          </label>
        </div>

        <h3>Project type</h3>
        <div className="contact-radio-container">
        
          <div className="radio-btn" style={{ marginRight: '20px'}}>
            <label for="web-development">Web Development
              <input type="radio" name="project-type" value="Web Development" id="web-development" />
            </label>
          </div>
          <div className="radio-btn" style={{ marginRight: '20px'}}>
            <label for="graphic-design">Graphic Design
              <input type="radio" name="project-type" value="Graphic Design" id="graphic-design" />
            </label>
          </div>
          <div className="radio-btn" style={{ marginRight: '20px'}}>
            <label for="other-type">Other
              <input type="radio" name="project-type" value="Other" id="other-type" />
            </label>
          </div>

        </div>
       
        <label><p>Message</p>
          <textarea name="message"></textarea>
        </label>
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}

      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
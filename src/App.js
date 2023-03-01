import { useState } from 'react';
import data from './data';

function App() {
  //USESTATE FOR PARAGRAPH COUNT
  const [count, setcount] = useState(0);
  //USESTATE FOR PARAGRAPH GENERATOR
  const [text, settext] = useState([]);

  //SUBMITING FORM

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(count);

    let amount = count;

    if (count <= 0) {
      amount = 1;
    }
    if (count >= 8) {
      amount = 8;
    }
    if (count > 10) {
      alert('SRY YOU CAN ONLY GENERATE UPTO 8 PARAGRAPHS');
    }

    settext(data.slice(0, amount));
  };

  return (
    <section className="section">
      <h1 className="section_title">PARAGRAPH GENERATOR?😁</h1>

      <form onSubmit={handleSubmit} className="section_form">
        <div className="section_form_box">
          <label htmlFor="name" className="section_form_box_label">
            PARAGRAPH:
          </label>
          <input
            value={count}
            onChange={(e) => setcount(e.target.value)}
            type="number"
            className="section_form_box_input"
          />
          <button type="submit" className="btn">
            GENERATE
          </button>
        </div>
      </form>

      <article className="para">
        {text.map((data, index) => {
          return (
            <p className="para_text" key={index}>
              {data}
            </p>
          );
        })}
      </article>
    </section>
  );
}

export default App;

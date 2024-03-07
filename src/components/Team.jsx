import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Conócenos</h2>
          <p>
          En Arrebol, nos dedicamos a ofrecer productos de alta calidad derivados de la naturaleza. Nos enorgullece trabajar en armonía con las abejas para producir miel y otros productos apícolas de manera sostenible y respetuosa con el medio ambiente. Nuestra pasión por la calidad y la autenticidad impulsa cada paso de nuestro proceso de producción, desde la colmena hasta tu hogar.
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img " />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}

        </div>
      </div>
    </div>
  );
};

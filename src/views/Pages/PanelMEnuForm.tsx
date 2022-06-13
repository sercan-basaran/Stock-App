import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import "./PanelButon.css";

export function AracTipi() {
  const [name, setName]: any = useState();

  const Onsubmit = (data: any) => {
    data = {
      categoryName: name,
    };
  };

  return (
    <div>
      <div className="flex ">
        <div className="card" />
        <form className="p-fluid">
          <div className="field">
            <span className="p-float-label">
              <InputText
                id="name"
                value={name}
                name="name"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="name">Aracın Tipi</label>
            </span>
          </div>
          <div className="button-demo">
            {" "}
            <div className="card">
              <div className="template">
                <Button
                  type="submit"
                  className="amazon p-0"
                  aria-label="Amazon"
                  style={{ marginLeft: "50px", width: "80px" }}
                >
                  <span
                    className="px-3 mt-3"
                    style={{ height: "30px", width: "100px" }}
                  >
                    Kaydet
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export function AracMArkasi() {
  const [name1, setName1]: any = useState();
  return (
    <div>
      <div className="flex ">
        <div className="card" />
        <form className="p-fluid">
          <div className="field">
            <span className="p-float-label">
              <InputText
                id="name"
                value={name1}
                name="name"
                autoFocus
                onChange={(e) => setName1(e.target.value)}
              />
              <label htmlFor="name">Aracın Markası</label>
            </span>
          </div>
          <div className="button-demo">
            {" "}
            <div className="card">
              <div className="template">
                <Button
                  type="submit"
                  className="amazon p-0"
                  aria-label="Amazon"
                  style={{ marginLeft: "50px", width: "80px" }}
                >
                  <span
                    className="px-3 mt-3"
                    style={{ height: "30px", width: "100px" }}
                  >
                    Kaydet
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export function AracModeli() {
  const [name2, setName2]: any = useState();
  return (
    <div>
      <div className="flex ">
        <div className="card" />
        <form className="p-fluid">
          <div className="field">
            <span className="p-float-label">
              <InputText
                id="name"
                value={name2}
                name="name"
                autoFocus
                onChange={(e) => setName2(e.target.value)}
              />
              <label htmlFor="name">Aracın Modeli</label>
            </span>
          </div>
          <div className="button-demo">
            {" "}
            <div className="card">
              <div className="template">
                <Button
                  type="submit"
                  className="amazon p-0"
                  aria-label="Amazon"
                  style={{ marginLeft: "50px", width: "80px" }}
                >
                  <span
                    className="px-3 mt-3"
                    style={{ height: "30px", width: "100px" }}
                  >
                    Kaydet
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export function AracYili() {
  const [name3, setName3]: any = useState();
  return (
    <div>
      <div className="flex ">
        <div className="card" />
        <form className="p-fluid">
          <div className="field">
            <span className="p-float-label">
              <InputText
                id="name"
                value={name3}
                name="name"
                autoFocus
                onChange={(e) => setName3(e.target.value)}
              />
              <label htmlFor="name">Aracın Yılı</label>
            </span>
          </div>
          <div className="button-demo">
            {" "}
            <div className="card">
              <div className="template">
                <Button
                  type="submit"
                  className="amazon p-0"
                  aria-label="Amazon"
                  style={{ marginLeft: "50px", width: "80px" }}
                >
                  <span
                    className="px-3 mt-3"
                    style={{ height: "30px", width: "100px" }}
                  >
                    Kaydet
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

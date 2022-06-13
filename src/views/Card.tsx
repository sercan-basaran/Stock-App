import { Card } from "primereact/card";
import { DialogDemo } from "./Pages/Dialog";

const CardDemo = () => {
  const header = (
    <img
      alt="Card"
      src="https://img.joomcdn.net/4340ee1100bbfb4e16bbcb34627c46923144af1b_original.jpeg"
      onError={(e) =>
        ((e.target as HTMLSourceElement).src =
          "https://img.joomcdn.net/4340ee1100bbfb4e16bbcb34627c46923144af1b_original.jpeg")
      }
      style={{ height: "200px" }}
    />
  );
  const footer = "";

  const fiyat = "3500$";

  return (
    <div>
      <div>
        <div>
          <div className="grid">
            <div className="col-12 md:col-6 lg:col-3">
              {" "}
              <Card
                /*title="Advanced Card" subTitle="Subtitle"*/ style={{
                  width: "18em",
                }}
                footer={footer}
                header={header}
              >
                <p className="m-0" style={{ lineHeight: "1.5", height: "5em" }}>
                  Krom Egzoz Her Araç için Uyumlu
                </p>
                <b>{fiyat}</b>
                <DialogDemo />
              </Card>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              {" "}
              <Card
                /*title="Advanced Card" subTitle="Subtitle"*/ style={{
                  width: "18em",
                }}
                footer={footer}
                header={header}
              >
                <p className="m-0" style={{ lineHeight: "1.5", height: "5em" }}>
                  Krom Egzoz Her Araç için Uyumlu
                </p>
                <b>{fiyat}</b>
                <DialogDemo />
              </Card>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              {" "}
              <Card
                /*title="Advanced Card" subTitle="Subtitle"*/ style={{
                  width: "18em",
                }}
                footer={footer}
                header={header}
              >
                <p className="m-0" style={{ lineHeight: "1.5", height: "5em" }}>
                  Krom Egzoz Her Araç için Uyumlu
                </p>
                <b>{fiyat}</b>
                <DialogDemo />
              </Card>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              {" "}
              <Card
                /*title="Advanced Card" subTitle="Subtitle"*/ style={{
                  width: "18em",
                }}
                footer={footer}
                header={header}
              >
                <p className="m-0" style={{ lineHeight: "1.5", height: "5em" }}>
                  Krom Egzoz Her Araç için Uyumlu
                </p>
                <b>{fiyat}</b>
                <DialogDemo />
              </Card>
            </div>
          </div>
          <br />
          <div className="grid">
            <div className="col-12 md:col-6 lg:col-3">
              {" "}
              <Card
                /*title="Advanced Card" subTitle="Subtitle"*/ style={{
                  width: "18em",
                }}
                footer={footer}
                header={header}
              >
                <p className="m-0" style={{ lineHeight: "1.5", height: "5em" }}>
                  Krom Egzoz Her Araç için Uyumlu
                </p>
                <b>{fiyat}</b>
                <DialogDemo />
              </Card>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              {" "}
              <Card
                /*title="Advanced Card" subTitle="Subtitle"*/ style={{
                  width: "18em",
                }}
                footer={footer}
                header={header}
              >
                <p className="m-0" style={{ lineHeight: "1.5", height: "5em" }}>
                  Krom Egzoz Her Araç için Uyumlu
                </p>
                <b>{fiyat}</b>
                <DialogDemo />
              </Card>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              {" "}
              <Card
                /*title="Advanced Card" subTitle="Subtitle"*/ style={{
                  width: "18em",
                }}
                footer={footer}
                header={header}
              >
                <p className="m-0" style={{ lineHeight: "1.5", height: "5em" }}>
                  Krom Egzoz Her Araç için Uyumlu
                </p>
                <b>{fiyat}</b>
                <DialogDemo />
              </Card>
            </div>

            <div className="col-12 md:col-6 lg:col-3">
              {" "}
              <Card
                /*title="Advanced Card" subTitle="Subtitle"*/ style={{
                  width: "18em",
                }}
                footer={footer}
                header={header}
              >
                <p className="m-0" style={{ lineHeight: "1.5", height: "5em" }}>
                  Krom Egzoz Her Araç için Uyumlu
                </p>
                <b>{fiyat}</b>
                <DialogDemo />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDemo;

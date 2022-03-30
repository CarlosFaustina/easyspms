export const injectColorAdjustmentsCss = `
.input-color {
  position: relative;
  padding-bottom: 20px;
}
.input-color input {
  padding-left: 20px;
}
.input-color .color-box {
  width: 10px;
  height: 10px;
  display: inline-block;
  background-color: #ccc;
  position: absolute;
  left: 5px;
  top: 5px;
}

.RadioCores input[type="radio"] {
  display: none;
}
.RadioCores input[type="radio"]:checked + label {
  border: 1px solid;
}

.RadioCores label {
  display: inline-block;
  width: 20px;
  height: 20px;
  padding: 4px 11px;
  font-family: Arial;
  font-size: 16px;
  cursor: pointer;
}

.RadioCores label[for="corVermelho"] {
  background-color: #e4111c;
}

.RadioCores label[for="corAzul"] {
  background-color: #06a1dd;
}
.RadioCores label[for="corAmarelo"] {
  background-color: #feef16;
}

.RadioCores label[for="corRosa"] {
  background-color: #e40d7d;
}

.RadioCores label[for="corBranco"] {
  background-color: #ffffff;
}

.RadioCores label[for="corPreto"] {
  background-color: #000000;
}

.RadioCores label[for="corVerde"] {
  background-color: #17963e;
}

.RadioCores label[for="corRoxo"] {
  background-color: #312582;
}


`;

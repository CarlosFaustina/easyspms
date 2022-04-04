export const audioPlayerSyles = `
.accessibilityPlayerAudioContainer { 
  position: fixed; 
  width: 350px; 
  height: auto; 
  bottom: 80px; right: 10px;
  background-color: white; 
  z-index: 5655; 
  border-radius: 4px; 
  -webkit-box-shadow: 5px 5px 15px 0px rgba(0,0,0,0.24); 
  box-shadow: 5px 5px 15px 0px rgba(0,0,0,0.24);
}
.accessibilityPlayerAudioHeader { 
  display: flex; 
  justify-content: space-between; 
  color: grey;  
  border-bottom: 1px solid lightgrey; 
  padding: 8px;
}
.accessibilityPlayerAudioBody {
  padding: 8px; 
  display: flex; 
  flex-direction: column;
}

.accessibilityPlayerAudioFooter {
  display: flex; 
  flex-direction: row; 
  justify-content: space-between; 
  align-items: center; 
  border-top: 1px solid; 
  border-color: lightgrey; 
  padding: 8px; 
  margin-top: 10px;
}
`;


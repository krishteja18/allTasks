import React from "react";
import ImageUploader from "react-images-upload";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    

    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }

  render() {
    return (

        <div style={{marginTop:"40px"}}>
      <ImageUploader
        withIcon={true}
        withPreview={true}
        fileSizeError="file size is greater than 3mb"
        label="Max file size 3mb,accepted:jpg|gif|png|jpeg"
        buttonText="Choose images"
        onChange={this.onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
        maxFileSize={3145728}
      />
      </div>
    );
  }
}

export default App;

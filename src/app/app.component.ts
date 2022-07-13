import { Component, OnInit, ElementRef } from '@angular/core';

import html2canvas from 'html2canvas';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';

  constructor(private _elementRef: ElementRef) {}

  ngOnInit() {}

  bater() {
    html2canvas(document.body).then((canvas) => {
      // this.saveAs(canvas.toDataURL("image/png"), `canvas.png`)
      var base64image = canvas.toDataURL('image/png');

      // Split the base64 string in data and contentType
      var block = base64image.split(',');
      console.log(block[1]);
    });
  }

  /*
   b64toBlob(b64Data, contentType, sliceSize?) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

      var blob = new Blob(byteArrays, {type: contentType});
      return blob;
}

  myClickFunction( event: any ){
  html2canvas( event.target )
    .then((canvas) => {
      canvas.toBlob(function(blob) {
        console.log(blob)
    });
    })
    .catch(err => {
      console.log("error canvas", err);
    });
}

  saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      //simulate click
      link.click();

      console.log(link.attributes['href']);
      //remove the link when done
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }*/
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrintDemo';

  print() {
    const printWindow = window.open('', '', 'width=1980,height=1080');
    if (!printWindow) {
      return;
    }
    printWindow.document.write(
      '<html><head><title>NXT1 Sports</title></head><body>'
    );
    printWindow.document.write(
      `<div style="width: 1200; margin: auto; page-break-after: always; overflow: hidden;">`
    );
    printWindow.document.write('</div>');
    printWindow.document.write(
      '<div style="display: flex; justify-content: center;">'
    );
    printWindow.document.write(
      `<h1>I am here.</h1>`
    );
    printWindow.document.write('</div>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    // printWindow.close();
  }
}

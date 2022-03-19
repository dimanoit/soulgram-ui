import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'soul-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploaderComponent {
  @Input() fileLink?: string;
  @Input() disabled = false;
  @Output() uploadFile: EventEmitter<File> = new EventEmitter<File>();

  @ViewChild('file') fileInput!: ElementRef;
  currentFile!: File;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  get acceptedFormats(): string {
    return 'image/*';
  }

  openDirectory(): void {
    this.fileInput.nativeElement.click();
  }

  async changeFile(event: Event): Promise<void> {
    const htmlInput = event?.target as HTMLInputElement;
    if (htmlInput?.files?.length === undefined) {
      return;
    }

    if (htmlInput?.files?.length <= 0) {
      return;
    }

    this.currentFile = htmlInput.files[0] as File;
    this.fileLink = await this.getBinaryData(this.currentFile);
    this.uploadFile.emit(this.currentFile);

    this.changeDetectorRef.detectChanges();
  }

  private getBinaryData(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;

      reader.readAsDataURL(file);
    });
  }
}

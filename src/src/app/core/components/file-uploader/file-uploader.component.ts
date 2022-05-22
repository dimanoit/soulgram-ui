import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'soul-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploaderComponent {
  @Input() fileLinks: string[] = [];
  @Input() disabled = false;
  @Output() onUploadFiles: EventEmitter<File[]> = new EventEmitter<File[]>();

  @ViewChild('file') fileInput!: ElementRef;

  private cachedFiles: File[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  get acceptedFormats(): string {
    return 'image/*';
  }

  openDirectory(): void {
    this.fileInput.nativeElement.click();
  }

  async addFile(event: Event): Promise<void> {
    const file = this.getFile(event);
    if (!file) {
      return;
    }

    const fileData = await this.getBinaryData(file);
    this.fileLinks.push(fileData);

    this.cachedFiles.push(file);
    this.onUploadFiles.emit(this.cachedFiles);

    this.changeDetectorRef.detectChanges();
  }

  private getFile(event: Event): File | null {
    const htmlInput = event?.target as HTMLInputElement;
    if (htmlInput?.files?.length === undefined) {
      return null;
    }

    if (htmlInput?.files?.length <= 0) {
      return null;
    }

    return htmlInput.files[0] as File;
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

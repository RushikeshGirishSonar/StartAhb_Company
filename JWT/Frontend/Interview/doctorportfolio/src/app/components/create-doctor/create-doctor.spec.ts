import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateDoctorComponent } from './create-doctor.component';

describe('CreateDoctorComponent', () => {
  let component: CreateDoctorComponent;
  let fixture: ComponentFixture<CreateDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDoctorComponent]  // ✅ standalone component auto-imports FormsModule/CommonModule
    }).compileComponents();

    fixture = TestBed.createComponent(CreateDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // ✅ run change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

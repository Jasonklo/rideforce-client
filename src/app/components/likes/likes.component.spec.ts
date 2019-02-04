import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesComponent } from './likes.component';
import { AuthService } from '../../services/auth.service';
import { AppModule } from '../../app.module';
import { APP_BASE_HREF } from '../../../../node_modules/@angular/common';

describe('LikesComponent', () => {
  let component: LikesComponent;
  let authService: AuthService;
  let fixture: ComponentFixture<LikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          AppModule
          ],
        providers: [
          {provide: APP_BASE_HREF, useValue : '/',
          LikesComponent}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should get the User', () => {
    component.ngOnInit();
    expect(component.currentUser).toBeTruthy();
  });
});

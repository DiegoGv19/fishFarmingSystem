import { Component, OnInit } from '@angular/core';
import { response } from 'src/app/fish-farming/interfaces/response.interface';
import { createFish } from '../../interfaces/createFish.interface';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-create-fish',
  templateUrl: './create-fish.component.html',
  styleUrls: ['./create-fish.component.scss']
})
export class CreateFishComponent implements OnInit {
    public preview: string|null = 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png';
    public errorName: boolean = false;
    public errorMinPhRang: boolean = false;
    public errorMaxPhRang: boolean = false;
    public errorMinDoRang: boolean = false;
    public errorMaxDoRang: boolean = false;
    public errorMinTempRang: boolean = false;
    public errorMaxTempRang: boolean = false;
    public fish: createFish = {
        Name: '',
        MinPhRang: '',
        MaxPhRang: '',
        MinDoRang: '',
        MaxDoRang: '',
        MinTempRang: '',
        MaxTempRang: ''
    }

    constructor(private adminService: AdminService) { }

    ngOnInit(): void {}

    public validateFish(): void {
        if(this.validateName()) {
            if(this.validateTemp()) {
                if(this.validatePh()) {
                    if(this.validateDo()) {
                        this.createFish();
                    }
                }
            }
        }
    }
    
    public validateName(): boolean {
        let validate = false;
        if(this.fish.Name == '') {
            validate = false;
            this.errorName = true;
        }
        else {
            validate = true;
            this.errorName = false;
        }

        return validate;
    }

    public validateTemp(): boolean {
        let validate = false;
        if(this.fish.MinTempRang == '') {
            validate = false;
            this.errorMinTempRang = true;
        }
        else {
            validate = true;
            this.errorMinTempRang = false;
        }
        if(this.fish.MaxTempRang == '') {
            validate = false;
            this.errorMaxTempRang = true;
        }
        else {
            validate = true;
            this.errorMaxTempRang = false;
        }

        return validate;
    }

    public validatePh(): boolean {
        let validate = false;
        if(this.fish.MinPhRang == '') {
            validate = false;
            this.errorMinPhRang = true;
        }
        else {
            validate = true;
            this.errorMinPhRang = false;
        }
        if(this.fish.MaxPhRang == '') {
            validate = false;
            this.errorMaxPhRang = true;
        }
        else {
            validate = true;
            this.errorMaxPhRang = false;
        }

        return validate;
    }

    public validateDo(): boolean {
        let validate = false;
        if(this.fish.MinDoRang == '') {
            validate = false;
            this.errorMinDoRang = true;
        }
        else {
            validate = true;
            this.errorMinDoRang = false;
        }
        if(this.fish.MaxDoRang == '') {
            validate = false;
            this.errorMaxDoRang = true;
        }
        else {
            validate = true;
            this.errorMaxDoRang = false;
        }

        return validate;
    }

    public createFish() {
        this.adminService.createFish(this.fish).subscribe(
            (response: response) => {
                if(response.Code == '200') {
                    this.fish.Name = '';
                    this.fish.MinDoRang = '';
                    this.fish.MaxDoRang = '';
                    this.fish.MinPhRang = "";
                    this.fish.MaxPhRang = "";
                    this.fish.MinTempRang = "";
                    this.fish.MaxTempRang = "";
            }
        }
    )
    }
}

import { ref } from "vue";
import { uploadImages } from "@/services/interfaces/pollCreationInterfaces/pollOptions.interfaces";
import { pollOptions, urlLogo, pollLogo, urlBanner, pollBanner } from "@/app/pollCreation/allFakeData/pollOptions";

export default class service {
    allPollOptions = ref(pollOptions);
    displayOptionContent = ref(false);
    displayLogoOption = ref(false);
    displayBannerOption = ref(false);
    noImage = "media/avatars/no-image.png";
    getUploadImages = ref<uploadImages>({ urlLogo, pollLogo, urlBanner, pollBanner });
    stockLogo = this.getUploadImages.value.pollLogo;
    getFile;
    stockBanner = this.getUploadImages.value.pollBanner;

    /*===== Option Comments =====*/

    isDisplayOptionContent = (): boolean => {
        return this.displayOptionContent.value;
    };

    displayCommentOptionContent = (e) => {
        const getInputId = document.querySelector(`input[id="comm_${e}"]`) as HTMLInputElement | null;

        getInputId?.checked ? this.displayOptionContent.value = true : this.displayOptionContent.value = false;
    };

    /*===== End Option Comments =====*/

    isUploadImages = () => {
        return this.getUploadImages.value;
    };

    isUploadNoImage = () => {
        return this.noImage;
    };

    /*===== Option Logo =====*/

    isDisplayLogoContent = (): boolean => {
        return this.displayLogoOption.value;
    };

    displayLogoOptionContent = (e) => {
        const getInputId = document.querySelector(`input[id="logo_${e}"]`) as HTMLInputElement | null;

        getInputId?.checked ? this.displayLogoOption.value = true : this.displayLogoOption.value = false; this.stockLogo.splice(0);
    };

    addLogoImg = (e) => {
        const file = e.target.files[0];
        this.getUploadImages.value.urlLogo = new Object(URL.createObjectURL(file));

        this.stockLogo.push(file);

        this.stockLogo.length > 1 ? this.stockLogo.shift() : this.stockLogo.splice(0); this.stockLogo.push(file);

        this.getFile = file;
    };

    removeLogoImg = () => {
        this.stockLogo.splice(0);
        URL.revokeObjectURL(this.getUploadImages.value.urlLogo);
        delete this.getFile;
    };

    /*===== End Option Logo =====*/

    /*===== Option Banner =====*/
    isDisplayBannerContent = (): boolean => {
        return this.displayBannerOption.value;
    };

    displayBannerOptionContent = (e) => {
        const getInputId = document.querySelector(`input[id="banner_${e}"]`) as HTMLInputElement | null;

        getInputId?.checked ? this.displayBannerOption.value = true : this.displayBannerOption.value = false; this.stockBanner.splice(0);
    };

    addBannerImg = (e) => {
        const file = e.target.files[0];
        this.getUploadImages.value.urlBanner = URL.createObjectURL(file);

        this.stockBanner.push(file);

        if (this.stockBanner.length > 1) {
            this.stockBanner.shift();
        }
    };

    removeBannerImg = () => {
        this.stockBanner.splice(0);
    };

    /*===== End option Banner =====*/
}

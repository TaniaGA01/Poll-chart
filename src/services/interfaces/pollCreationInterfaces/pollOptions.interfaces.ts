import { pollOptions } from "@/app/pollCreation/allFakeData/pollOptions";

export interface uploadImages {
  urlLogo;
  pollLogo;
  urlBanner;
  pollBanner;
}

export interface PollOptionsForm{
    meetingName: string;
    meetingDescription: string;
    pollOptions
}

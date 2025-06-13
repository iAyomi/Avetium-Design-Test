import { Heading, SubHeading, Paragraph } from "../components/Typography";
import Button from "../components/Button";
import screenBg from "../assets/screen_bg.svg";
import check from "../assets/icons/check.svg";
import bitbucket from "../assets/tools/bitbucket.svg";
import confluence from "../assets/tools/confluence.svg";
import discord from "../assets/tools/discord.svg";
import dropbox from "../assets/tools/dropbox.svg";
import figma from "../assets/tools/figma.svg";
import gCalender from "../assets/tools/google_calendar.svg";
import googleDrive from "../assets/tools/google_drive.svg";
import intercom from "../assets/tools/intercom.svg";
import jira from "../assets/tools/jira.svg";
import mailchimp from "../assets/tools/mailchimp.svg";
import notion from "../assets/tools/notion.svg";
import slack from "../assets/tools/slack.svg";
import stripe from "../assets/tools/stripe.svg";
import whatsapp from "../assets/tools/whatsapp.svg";
import zapier from "../assets/tools/zapier.svg";
import zendesk from "../assets/tools/zendesk.svg";

const Tools = () => {
  return (
    <div className="h-fit w-[80%] py-30 flex flex-col items-center justify-center gap-y-10">
      <SubHeading styles="text-[#E95D28] font-bold">Integrations</SubHeading>
      <Heading styles="text-4xl text-[#000000]">
        Get more value from your tools
      </Heading>
      <Paragraph styles="w-[60%] m-auto text-md font-medium text-[#4F4E53]">
        Connect your tools, connect your teams. With over 200 apps already
        available in our directory, your team’s favourite tools are just a click
        away.
      </Paragraph>
      <div className="flex flex-col gap-y-5">
        <div className="flex justify-between gap-x-5">
          <img src={notion} className="h-15" alt="notion" />
          <img src={slack} className="h-15" alt="slack" />
          <img src={googleDrive} className="h-15" alt="googleDrive" />
          <img src={intercom} className="h-15" alt="intercom" />
          <img src={jira} className="h-15" alt="jira" />
          <img src={dropbox} className="h-15" alt="dropbox" />
          <img src={stripe} className="h-15" alt="stripe" />
          <img src={zapier} className="h-15" alt="zapier" />
        </div>

        <div className="flex justify-between gap-x-5">
          <img src={figma} className="h-15" alt="figma" />
          <img src={confluence} className="h-15" alt="confluence" />
          <img src={mailchimp} className="h-15" alt="mailchimp" />
          <img src={zendesk} className="h-15" alt="zendesk" />
          <img src={gCalender} className="h-15" alt="gCalender" />
          <img src={whatsapp} className="h-15" alt="whatsapp" />
          <img src={discord} className="h-15" alt="discord" />
          <img src={bitbucket} className="h-15" alt="bitbucket" />
        </div>
      </div>
      <Button
        content="Get started today"
        styles="border-[#E95D28] text-[#BB3C2D]"
      />
    </div>
  );
};

const Integrations = () => {
  return (
    <section className="h-fit w-screen py-30 flex flex-col gap-y-20 items-center justify-center bg-[#FDF2EE]">
      <div className="w-[50%] flex flex-col items-center gap-y-4">
        <SubHeading styles="text-[#E95D28] font-bold">Integrations</SubHeading>
        <Heading styles="text-4xl text-[#000000]">
          Get more value from your tools
        </Heading>
        <Paragraph styles="text-md font-medium text-[#4F4E53]">
          Connect your tools, connect your teams. With over 200 apps already
          available in our directory, your team’s favourite tools are just a
          click away.
        </Paragraph>
      </div>

      <div className="w-[60%] h-fit flex flex-col gap-y-5">
        <div className="relative h-fit px-20 py-10 flex items-start justify-between gap-x-10 bg-[#BB3C2D17] rounded-2xl">
          <div className="relative w-[45%] top-5">
            <Paragraph styles="font-medium text-[#171717] text-start">
              Connect your tools, connect your teams. With over 200 apps already
              available in our directory, your team’s favourite tools are just a
              click away.
            </Paragraph>
          </div>

          <div className="h-[260px] w-[346px] border-6 border-[#535965] bg-linear-65 from-[#000000] to-[#9B9B9B] rounded-2xl"></div>
        </div>

        <div className="relative h-[30%] flex items-center justify-between gap-x-5">
          <div className="relative w-[48%] h-full px-10 py-5 flex flex-col items-center gap-y-5 bg-[#BB3C2D17] rounded-2xl overflow-hidden">
            <div>
              <Paragraph styles="font-medium text-[#171717] text-center">
                Connect your tools, connect your teams.
              </Paragraph>
            </div>

            <div className="">
              <div className="h-[260px] w-[346px] border-6 border-[#535965] bg-linear-65 from-[#000000] to-[#9B9B9B] rounded-2xl"></div>
            </div>
          </div>

          <div className="relative w-[48%] h-full px-10 py-5 flex items-start justify-between gap-x-5 bg-[#BB3C2D17] rounded-2xl overflow-hidden">
            <div className="w-[40%]">
              <Paragraph styles="font-medium text-[#171717] text-start">
                Connect your tools, connect your teams.
              </Paragraph>
            </div>

            <div className="absolute w-[50%] top-[-80px] right-[-10px]">
              <div className="h-[260px] w-[346px] border-6 border-[#535965] bg-linear-65 from-[#000000] to-[#9B9B9B] rounded-2xl"></div>
            </div>
          </div>
        </div>

        <div className="relative h-fit flex items-center justify-between gap-x-5 bg-[#BB3C2D17] rounded-2xl overflow-hidden">
          <div className="relative w-1/2 top-[50px] right-[20px]">
            <div className="h-[362px] w-full border-6 border-[#535965] bg-linear-65 from-[#000000] to-[#9B9B9B] rounded-2xl"></div>
          </div>

          <div className="w-1/2 px-20 py-10">
            <Paragraph styles="font-medium text-[#171717] text-start">
              Connect your tools, connect your teams. With over 200 apps already
              available in our directory, your team’s favourite tools are just a
              click away.
            </Paragraph>
          </div>
        </div>
      </div>

      <Button
        content="Get started today"
        styles="border-[#E95D28] text-[#BB3C2D]"
      />

      <div className="w-full flex flex-col gap-y-50">
        <div className="relative w-full flex justify-between items-center gap-x-5">
          <div className="w-1/2 px-30 py-10 flex flex-col text-start gap-y-5">
            <SubHeading styles="text-[#E95D28] font-bold">
              Integrations
            </SubHeading>
            <Heading styles="text-4xl text-[#000000]">
              Get more value from your tools right from one spot
            </Heading>
            <Paragraph styles="text-md font-medium text-[#4F4E53]">
              Connect your tools, connect your teams. With over 200 apps already
              available in our directory.
            </Paragraph>

            <div className="grid grid-cols-2 gap-x-5 gap-y-3">
              <div className="w-fit space-y-3">
                <img src={check} alt="check" />
                <Paragraph styles="text-sm font-medium text-[#4F4E53]">
                  Get unlimited design inspirations. Level up your design.
                </Paragraph>
              </div>

              <div className="w-fit space-y-3">
                <img src={check} alt="check" />
                <Paragraph styles="text-sm font-medium text-[#4F4E53]">
                  14+ Premium tailwind UI kits. Start with unlimited product
                  downloads.
                </Paragraph>
              </div>

              <div className="w-fit space-y-3">
                <img src={check} alt="check" />
                <Paragraph styles="text-sm font-medium text-[#4F4E53]">
                  Submit your design. Get extra exposure on works to grow fast.
                </Paragraph>
              </div>

              <div className="w-fit space-y-3">
                <img src={check} alt="check" />
                <Paragraph styles="text-sm font-medium text-[#4F4E53]">
                  Get unlimited design inspirations. Level up your design.
                </Paragraph>
              </div>
            </div>

            <Button
              content="Get started today"
              styles="w-1/2 border-[#E95D28] text-[#BB3C2D]"
            />
          </div>

          <div className="relative w-1/2">
            <div className="w-full overflow-hidden">
              <div className="z-10 relative left-[50px] h-[450px] w-full border-6 border-[#535965] bg-linear-65 from-[#000000] to-[#9B9B9B] rounded-2xl"></div>
            </div>

            <div className="absolute top-40 right-0">
              <img src={screenBg} alt="screen_asset" />
            </div>
          </div>
        </div>

        <div className="relative w-full flex justify-between items-center gap-x-5">
          <div className="relative w-1/2">
            <div className="w-full overflow-hidden">
              <div className="z-10 relative right-[50px] h-[450px] w-full border-6 border-[#535965] bg-linear-65 from-[#000000] to-[#9B9B9B] rounded-2xl"></div>
            </div>

            <div className="absolute top-40">
              <img className="rotate-y-180" src={screenBg} alt="screen_asset" />
            </div>
          </div>

          <div className="w-1/2 px-30 py-10 flex flex-col text-start gap-y-5">
            <SubHeading styles="text-[#E95D28] font-bold">
              Integrations
            </SubHeading>
            <Heading styles="text-4xl text-[#000000]">
              Get more value from your tools right from one spot
            </Heading>
            <Paragraph styles="text-md font-medium text-[#4F4E53]">
              Connect your tools, connect your teams. With over 200 apps already
              available in our directory.
            </Paragraph>

            <div className="grid grid-cols-2 gap-x-5 gap-y-3">
              <div className="w-fit space-y-3">
                <img src={check} alt="check" />
                <Paragraph styles="text-sm font-medium text-[#4F4E53]">
                  Get unlimited design inspirations. Level up your design.
                </Paragraph>
              </div>

              <div className="w-fit space-y-3">
                <img src={check} alt="check" />
                <Paragraph styles="text-sm font-medium text-[#4F4E53]">
                  14+ Premium tailwind UI kits. Start with unlimited product
                  downloads.
                </Paragraph>
              </div>

              <div className="w-fit space-y-3">
                <img src={check} alt="check" />
                <Paragraph styles="text-sm font-medium text-[#4F4E53]">
                  Submit your design. Get extra exposure on works to grow fast.
                </Paragraph>
              </div>

              <div className="w-fit space-y-3">
                <img src={check} alt="check" />
                <Paragraph styles="text-sm font-medium text-[#4F4E53]">
                  Get unlimited design inspirations. Level up your design.
                </Paragraph>
              </div>
            </div>

            <Button
              content="Get started today"
              styles="w-1/2 border-[#E95D28] text-[#BB3C2D]"
            />
          </div>
        </div>
      </div>

      <Tools />
    </section>
  );
};

export default Integrations;

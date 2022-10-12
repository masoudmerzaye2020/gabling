import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import Section from "../components/section";
import Container from "../components/container";
import Title from "../components/title";
import Sitescards from "../components/sitescards";
import Button from "../components/button";
import Gamblingsitereviews from "../section/gamblingsitereviews";
import Sitereview from "../section/sitereview";
import Regionalsites from "../section/regionalsites";
import Safegambling from "../section/safegambling";
import Blockedgame from "../section/blockedgame";
import Aboutgamblingsites from "../section/aboutgamblingsites";
import FAQ from "../section/faq";
import Wideimage from "../components/wideimage";
import TextTitle from "../components/TextTitle";
import Table from "../components/table";
import Mainbullet from "../components/mainbullet";
import Imagewithlink from "../components/imagewithlink";

const style = {
  header: "w-full bg-[#324959] border-2 border-[#88c6f2] py-4",
  headertext: "text-3xl w-11/12 flex mx-auto font-semibold text-gray-200 pl-4",
  section: "w-full bg-gray-200",
  container: "w-full md:w-11/12 lg:w-10/12 mx-auto px-2 py-4",
  paragraph: "py-[5px]",
  boldparagraph: " font-semibold pl-8",
  title: "text-4xl font-semibold pb-2",
  divider:
    " w-full border-t-2 border-b-[1px]  h-[5px] border-t-gray-900 border-b-blue-500",
  quate_box:
    "bg-[#c4ffc4] border-2 border-[#afe4af] rounded-lg flex px-6 py-8 my-6 font-semibold italic drop-shadow-2xl shadow-gray-900",
  box: "flex font-semibold italic flex-wrap mx-auto justify-center px-auto",
};

export default function Home() {

  return (
    <>
      <div className="w-full bg-[#15365a] text-center p-2">
        <h1 className="text-5xl px-8 font-semibold text-gray-200 py-1">
          The Best Online Gambling Sites for 2022
        </h1>
        <p className="text-lg text-gray-300 py-1">
          Rankings and Reviews of 200+ Online Casinos, Sports Betting Sites, and
          Other Gambling Websites
        </p>
      </div>
      <Section>
        <Container>
          <p>
            Betting on sports is awesome. It’s no surprise that this hobby is
            growing in popularity year after year. And it’s easier than ever to
            get involved, thanks to online sports betting.
          </p>
          <p>
            You have tons of options if you want to bet on sports online, as
            there are hundreds of sportsbooks and betting apps. We’ve handpicked
            the few that stand out to bring you our recommendations of the best
            sports betting sites in 2022.
          </p>
          <Sitescards />
          <p>
            These are safe and trusted sites for betting on sports online. They
            offer great odds, generous bonuses, fast payouts, and so much more.
          </p>
          <p>
            If you’re looking for somewhere to place your sports bets right now,
            you can go ahead at any of these top-rated betting sites with
            confidence.
          </p>
          <p>
            Alternatively, read on to find out what these online sportsbooks
            have to offer. We also rank online bookmakers in several categories,
            and we will explain how to use those rankings to find the sports
            betting sites that match your preferences.
          </p>
          <Title title={"What the Top Sports Betting Sites Have to Offer"} />
          <Wideimage
            src={"/image/best-online-sports-betting-sites-what-they-offer.jpg"}
          />
          <p>
            The leading sportbooks online deliver higher value and a better user
            experience than the competition, thanks to their constant desire to
            grow and improve. Let’s explore more details about the important
            features that these websites have to offer.
          </p>
          <TextTitle title={"Safe and Legal Online Betting"} />
          <p>
            The safety of your cash and personal information should always be
            the top priority when you’re looking to join an online bookmaker.
            You want to know that you’re using legitimate sites that are
            operating legally and that you can trust to treat you in the right
            way.
          </p>
          {/* tumps up div */}
          <p>
            We take great care when ranking sportsbook sites for our readers.
            There are many factors to consider, each of which matters in its own
            way. But nothing is more important than ensuring all of our
            recommendations represent the most trusted betting sites available.
          </p>
          <TextTitle title={"Easy Depositing and Fast Payouts"} />
          <p>
            The ability to move your money to and from your account without much
            of a hassle is crucial when you gamble online. That’s why we
            recommend sports betting sites that have several convenient options
            for deposits and withdrawals. You can choose the options that works
            well for you.
          </p>
          <p>
            Here are the available payment methods at our recommended sites.
          </p>

          

          <p>
            Our recommended sites process the payouts much faster than the
            competition. Your cash could reach you within a day or so via the
            fastest methods like e-wallets and crypto. Check out this page for
            more information on betting sites with fast payouts.
          </p>
          <p>
            Note that some of the providers could be limited based on your
            country of residence. For example, US sports gamblers can’t use
            e-wallets like PayPal, Skrill, or Neteller.
          </p>

          <TextTitle title={"Limits to Suit All Budgets"} />
          <p>
            Every user has different needs based on their budget and goals. Some
            are just looking for fun and don’t want to risk making big real
            money bets. Others are pros who want to wager plenty of cash on a
            regular basis.
          </p>
          <p>
            We have compiled rankings of the top sites for high stakes betting
            for that second group, but our highest-rated sportsbooks online all
            work with flexible limits that suit almost everyone.
          </p>
          <div className="blue">
            <p>
              Here’s an example of the deposit and staking limits at one of the
              top sports betting sites.
            </p>
            <Mainbullet link={""} title={""} desc={"Minimum deposit: $10"} />
            <Mainbullet
              link={""}
              title={""}
              desc={"Maximum deposit: $100,000"}
            />
            <Mainbullet link={""} title={""} desc={"Minimum stakes: $1"} />
            <Mainbullet
              link={""}
              title={""}
              desc={
                "Maximum stakes: Up to $50,000 depending on the sport and market"
              }
            />
          </div>

          <p>
            You can easily start with a small bankroll and place a couple of
            bucks per wager, or go big if you want. That’s the case with most of
            our recommended betting websites. We provide more information about
            all of these limits in our reviews, so feel free to check them out.
          </p>
          <p></p>

          <TextTitle title={"Valuable Bonuses and Promotions"} />
          <p>
            Online sportsbooks use promotions and bonuses to attract customers.
            When you first sign up, you can claim a welcome bonus that matches a
            percentage of your first deposit. You can use those bonus funds to
            boost your bankroll and place additional bets.
          </p>

          <p>
            After you are an established customer, you can still claim other
            bonuses, such as odds boosts, free bets, reload bonuses, free
            contest entries, and accumulator boosts. If getting as many offers
            as possible is your highest priority, you should check the top
            online betting sites for bonuses and promotions.
          </p>

          <p>
            We also have individual pages with more details on some of the best
            bonuses you can find online. Feel free to browse around and find the
            most valuable offers for your bankroll and needs.
          </p>
          <div>
            <Imagewithlink src={'/image/BetUS-bonuses-170.png'} title={'lkjlke'} link={''}/>
            <Imagewithlink src={''} title={''} link={''}/>
            <Imagewithlink src={''} title={''} link={''}/>
            <Imagewithlink src={''} title={''} link={''}/>
          </div>
        </Container>
      </Section>
         <Regionalsites/>
        <Safegambling/>
        <Blockedgame/> 
        <Aboutgamblingsites/> 
        <Gamblingsitereviews/>
        <FAQ/> 
    </>
  );
}

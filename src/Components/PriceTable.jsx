import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OneStepPriceCard from "./OneStepPriceCard";
import TwoStepPriceCard from "./TwoStepPriceCard";

export default () => (
  <Tabs className="priceTab lg:text-2xl md:text-lg text-sm text-white">
    <TabList className="priceTabUl">
      <Tab className="p-6 bg-dark hover:bg-white duration-200 hover:text-dark rounded-none">
        ONE STEP
      </Tab>
      <Tab className="p-6 bg-dark hover:bg-white duration-200 hover:text-dark rounded-none">
        TWO STEP
      </Tab>
      <Tab className="p-6 bg-dark hover:bg-white duration-200 hover:text-dark rounded-none">
        INSTANT
      </Tab>
    </TabList>

    <TabPanel className="one-step InnerPriceTab mt-10 lg:text-2xl">
      <Tabs>
        <TabList>
          <Tab className="text-center hover:bg-white hover:text-dark">$10K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark">$25K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark">$50K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark  leading-6">
            $100K
            <br />
            <span class="lg:text-[10px] text-[5px] text-secondory">
              {" "}
              MOST POPULAR{" "}
            </span>
          </Tab>
          <Tab className="text-center hover:bg-white hover:text-dark">$250K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark">$400K</Tab>
        </TabList>
        <TabPanel className="10K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-8xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$75</span> for
              <span className="text-primary"> 10K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=99" target="blank"
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 font-bold rounded"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="25K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-8xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$190</span> for
              <span className="text-primary"> 25K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=100" target="blank"
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 font-bold rounded"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="50K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-8xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$375</span> for
              <span className="text-primary"> 50K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=101" target="blank"
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 font-bold rounded"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="100K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-8xl md:text-4xl text-3xl font-bold">
              <span className="text-secondory">$750</span> for
              <span className="text-secondory"> 100K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=102" target="blank"
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 font-bold rounded"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="250K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-8xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$2000</span> for
              <span className="text-primary"> 250K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=103" target="blank"
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 font-bold rounded"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="400K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-8xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$3,600</span> for
              <span className="text-primary"> 400K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=104" target="blank"
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 font-bold rounded"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
      </Tabs>
    </TabPanel>
    <TabPanel className="two-step InnerPriceTab mt-10 lg:text-2xl">
      <Tabs>
        <TabList>
          <Tab className="text-center hover:bg-white hover:text-dark">$10K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark">$25K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark">$50K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark  leading-6">
            $100K
            <br />
            <span class="lg:text-[10px] text-[5px] text-secondory">
              {" "}
              MOST POPULAR{" "}
            </span>
          </Tab>
          <Tab className="text-center hover:bg-white hover:text-dark">$250K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark">$400K</Tab>
        </TabList>
        <TabPanel className="10K">
          <TwoStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-8xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$50</span> for
              <span className="text-primary"> 10K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=160" target="blank"
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 font-bold rounded"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="25K">
          <TwoStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-8xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$190</span> for
              <span className="text-primary"> 25K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=100" target="blank"
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 font-bold rounded"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="50K">
          <TwoStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-8xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$375</span> for
              <span className="text-primary"> 50K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=101" target="blank"
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 font-bold rounded"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="100K">
          <TwoStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-8xl md:text-4xl text-3xl font-bold">
              <span className="text-secondory">$750</span> for
              <span className="text-secondory"> 100K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=102" target="blank"
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 font-bold rounded"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="250K">
          <TwoStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-8xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$2000</span> for
              <span className="text-primary"> 250K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=103" target="blank"
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 font-bold rounded"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="400K">
          <TwoStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-8xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$3,600</span> for
              <span className="text-primary"> 400K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=104" target="blank"
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 font-bold rounded"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
      </Tabs>
    </TabPanel>
    <TabPanel className="instant InnerPriceTab mt-10 lg:text-2xl">
      <Tabs>
        <TabList>
          <Tab className="text-center hover:bg-white hover:text-dark">$10K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark">$25K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark">$50K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark  leading-6">
            $100K
            <br />
            <span class="lg:text-[10px] text-[5px] text-secondory">
              {" "}
              MOST POPULAR{" "}
            </span>
          </Tab>
          <Tab className="text-center hover:bg-white hover:text-dark">$250K</Tab>
          <Tab className="text-center hover:bg-white hover:text-dark">$400K</Tab>
        </TabList>
        <TabPanel className="10K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-8xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$75</span> for
              <span className="text-primary"> 10K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=99" target="blank"
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 font-bold rounded"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="25K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-8xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$190</span> for
              <span className="text-primary"> 25K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=100" target="blank"
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 font-bold rounded"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="50K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-8xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$375</span> for
              <span className="text-primary"> 50K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=101" target="blank"
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 font-bold rounded"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="100K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-8xl md:text-4xl text-3xl font-bold">
              <span className="text-secondory">$750</span> for
              <span className="text-secondory"> 100K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=102" target="blank"
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 font-bold rounded"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="250K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-8xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$2000</span> for
              <span className="text-primary"> 250K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=103" target="blank"
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 font-bold rounded"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
        <TabPanel className="400K">
          <OneStepPriceCard />
          <div className="headingContainer mt-12 flex flex-col items-center justify-center md:gap-10 gap-8">
            <h2 class="text-center lg:text-8xl md:text-4xl text-3xl font-bold">
              <span className="text-primary">$3,600</span> for
              <span className="text-primary"> 400K </span> Account
            </h2>
            <a
              href="https://fundedlakedashboard.propaccount.com/en/challenges?planid=104" target="blank"
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 font-bold rounded"
            >
              <button>GET FUNDED</button>
            </a>
          </div>
        </TabPanel>
      </Tabs>
    </TabPanel>
  </Tabs>
);

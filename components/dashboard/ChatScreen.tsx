import {
  IChannelData,
  IChatLinkData,
  IMessageData,
} from "@/types/utils/firebaseOperations";
import { selectedChannelIdAtom } from "@/stores/selectedChannelIdAtom";
import React, { useState } from "react";
import { User } from "firebase/auth";
import ChatList from "./ChatList";
import Sidebar from "./Sidebar";
import { useAtom } from "jotai";

interface ChatScreenProps {
  user?: User | null;
  channels?: IChannelData[];
  messages?: IMessageData[];
  chatLink?: IChatLinkData | null;
  setChatLink: React.Dispatch<React.SetStateAction<IChatLinkData | null>>;
}

const ChatScreen = ({
  user,
  channels,
  messages,
  chatLink,
  setChatLink,
}: ChatScreenProps) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedChannelId, setSelectedChannelId] = useAtom(
    selectedChannelIdAtom
  );

  return (
    <>
      <div className="lg:w-96">
        <Sidebar
          id="sidebar"
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          user={user}
          channels={channels}
          messages={messages}
          selectedChannelId={selectedChannelId}
          setSelectedChannelId={setSelectedChannelId}
          chatLink={chatLink || null}
          setChatLink={setChatLink}
        />
      </div>
      <ChatList
        user={user}
        selectedChannelId={selectedChannelId}
        channels={channels}
        setSelectedChannelId={setSelectedChannelId}
        chatLink={chatLink || null}
      />
    </>
  );
};

export default ChatScreen;

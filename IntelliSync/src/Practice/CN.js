import React from 'react'

const CN = () => {
    const layers = [
        {
            title: "Application Layer",
            dataUnits: "Data",
            functions: "Mail Services, Directory Services, FTAM",
            details: (
                <div>
                    <p>
                        The Application layer is the topmost layer of the OSI model and it
                        directly interacts with web applications or application services.
                        This layer provides several ways for manipulating the data
                        (information) which actually enables any type of user to access the
                        network with ease. Functions of the Application Layer include email
                        services, directory services, and file transfer access and
                        management (FTAM). This layer also provides services that include:
                        E-mail, File transfer, directory services, and network resources.
                        Application Layer protocols include HTTP, FTP, SMTP, DNS, DHCP, and
                        SNMP. HTTP is used for transferring web pages, FTP for file
                        transfers, SMTP for email transmission, DNS for domain name
                        resolution, DHCP for dynamic IP address allocation, and SNMP for
                        network management and monitoring. The Application Layer facilitates
                        the use of network services by end users and applications, making it
                        a crucial layer in the OSI model. It ensures that communication
                        partners are identified, and it ensures that the necessary
                        communication resources exist to complete the data transfer.
                    </p>
                </div>
            ),
        },
        {
            title: "Presentation Layer",
            dataUnits: "Data",
            functions: "Encryption/Decryption, Compression",
            details: (
                <div>
                    <p>
                        The Presentation Layer is responsible for the translation of data
                        between the application layer and the network format. This includes
                        data encryption/decryption, data compression, and data translation.
                        The primary function of the Presentation Layer is to ensure that the
                        data sent from the application layer of one system can be read by
                        the application layer of another system. For example, this layer can
                        translate data from ASCII to EBCDIC. Encryption and decryption are
                        critical functions for ensuring data security during transmission.
                        This layer can also compress data to reduce the amount of data that
                        needs to be transmitted, which can help to optimize network
                        performance. The Presentation Layer is also responsible for managing
                        the syntax and semantics of the data exchanged between systems.
                        Protocols associated with this layer include JPEG, GIF, TIFF for
                        images, and SSL/TLS for encryption. By providing a translation
                        service between different data formats and encrypting/decrypting
                        data for secure transmission, the Presentation Layer ensures that
                        data sent by the application layer is correctly formatted and
                        secure.
                    </p>
                </div>
            ),
        },
        {
            title: "Session Layer",
            dataUnits: "Data",
            functions: "Session Establishment, Synchronization, Dialog Controller",
            details: (
                <div>
                    <p>
                        The Session Layer is responsible for establishing, managing, and
                        terminating sessions between two communicating hosts. This layer
                        ensures that sessions can be set up, maintained, and terminated in a
                        coordinated manner. The Session Layer manages data transmission for
                        a certain time period and ensures that data streams are properly
                        synchronized. This includes establishing a checkpoint, which allows
                        for recovery in case of an interruption. For instance, if a file
                        transfer session is interrupted, it can be resumed from the last
                        checkpoint instead of starting from the beginning. The Session Layer
                        also handles dialog control, which determines whether the
                        communication will be half-duplex (one way at a time) or full-duplex
                        (both ways simultaneously). This layer can manage multiple
                        communication streams and ensure that data from one stream does not
                        interfere with data from another stream. By providing session
                        management and synchronization, the Session Layer ensures reliable
                        and orderly communication between systems. Protocols associated with
                        this layer include NetBIOS and PPTP.
                    </p>
                </div>
            ),
        },
        {
            title: "Transport Layer",
            dataUnits: "Segments, Datagram",
            functions: "Segmentation, Flow Control, Error Control",
            details: (
                <div>
                    <p>
                        The Transport Layer is responsible for ensuring reliable data
                        transfer between end systems. It breaks down large data chunks into
                        smaller segments or datagrams, handles flow control to prevent
                        network congestion, and provides error control to ensure data
                        integrity. This layer is also responsible for reassembling the
                        segments back into the original data at the receiving end. Flow
                        control mechanisms like sliding window protocols ensure that the
                        sender does not overwhelm the receiver with too much data at once.
                        Error control mechanisms, such as checksums and acknowledgments,
                        ensure that any errors in transmission can be detected and corrected.
                        The Transport Layer also provides mechanisms for establishing, maintaining,
                        and terminating virtual circuits, which are logical connections
                        between the sender and receiver. This ensures that data is delivered
                        in the correct sequence and without errors. Protocols associated
                        with this layer include TCP and UDP. TCP provides reliable,
                        connection-oriented data transfer, while UDP provides
                        connectionless, best-effort data transfer. By providing reliable
                        data transfer, flow control, and error control, the Transport Layer
                        ensures that data is delivered accurately and efficiently between
                        end systems.
                    </p>
                </div>
            ),
        },
        {
            title: "Network Layer",
            dataUnits: "Packets",
            functions: "Traffic control, Fragmentation, Routing",
            details: (
                <div>
                    <p>
                        The Network Layer is responsible for routing data packets from the
                        source to the destination across multiple networks. This layer
                        handles the logical addressing of hosts (such as IP addresses) and
                        determines the best path for data to travel. Routing protocols like
                        OSPF and BGP are used to find the optimal path based on factors like
                        hop count, network congestion, and link costs. The Network Layer
                        also handles packet fragmentation and reassembly, which involves
                        breaking down large packets into smaller fragments that can be
                        transmitted over the network and then reassembling them at the
                        destination. Traffic control mechanisms ensure that data flows
                        smoothly through the network and avoid congestion. The Network Layer
                        provides logical addressing and path determination, ensuring that
                        data packets are routed efficiently and correctly. Protocols
                        associated with this layer include IPv4 and IPv6, which are used for
                        logical addressing and routing. By providing routing, logical
                        addressing, and traffic control, the Network Layer ensures that data
                        packets are delivered efficiently and accurately across multiple
                        networks.
                    </p>
                </div>
            ),
        },
        {
            title: "Data Link Layer",
            dataUnits: "Frames",
            functions: "Flow control, Error control, Access control",
            details: (
                <div>
                    <p>
                        The Data Link Layer is responsible for node-to-node data transfer
                        and error detection and correction. It provides a link between two
                        directly connected nodes and ensures that data is transferred
                        reliably across this link. The Data Link Layer breaks down data into
                        frames and adds necessary control information, such as frame
                        synchronization, flow control, and error control. Flow control
                        mechanisms ensure that the sender does not overwhelm the receiver
                        with too much data at once. Error control mechanisms, such as
                        checksums and CRC, ensure that any errors in transmission can be
                        detected and corrected. Access control mechanisms determine which
                        devices have access to the physical medium at any given time,
                        preventing collisions and ensuring fair access. The Data Link Layer
                        also handles frame synchronization, which ensures that the receiver
                        can correctly interpret the start and end of each frame. Protocols
                        associated with this layer include Ethernet, PPP, and Wi-Fi. By
                        providing reliable node-to-node data transfer, flow control, error
                        control, and access control, the Data Link Layer ensures that data
                        is transferred accurately and efficiently across the physical link.
                    </p>
                </div>
            ),
        },
        {
            title: "Physical Layer",
            dataUnits: "Bits",
            functions: "Bit Synchronization, Bit rate control, Physical Topologies",
            details: (
                <div>
                    <p>
                        The Physical Layer is responsible for the transmission of raw bit
                        streams over the physical medium. It deals with the physical
                        characteristics of the transmission medium, such as cables,
                        connectors, and signal types. The Physical Layer handles bit
                        synchronization, which ensures that the sender and receiver are
                        synchronized at the bit level. Bit rate control mechanisms determine
                        the speed at which data is transmitted, ensuring that the sender and
                        receiver can operate at compatible speeds. The Physical Layer also
                        defines the physical topology of the network, such as bus, star, and
                        ring topologies. This layer is responsible for converting digital
                        data into electrical, optical, or radio signals and transmitting
                        them over the physical medium. It also handles the reception and
                        conversion of these signals back into digital data at the receiving
                        end. Protocols associated with this layer include Ethernet (physical
                        layer specifications), USB, and Bluetooth. By providing bit
                        synchronization, bit rate control, and defining physical topologies,
                        the Physical Layer ensures that data is transmitted accurately and
                        efficiently over the physical medium.
                    </p>
                </div>
            ),
        },
    ];

    return (
        <div className="h-90b overflow-y-scroll scrollbar-hide  p-4">
            <header className="bg-blue-600 text-white p-4 mb-4">
                <h1 className="text-2xl font-bold text-center">Computer Networks Notes</h1>
            </header>
            <div className="container mx-auto w-full md:w-6/12 rounded-lg drop-shadow-lg gap-y-8 ">
                {layers.map((layer, index) => (
                    <div key={index} className="bg-white shadow-md rounded p-4 mb-4 opacity-70 transform transition-transform duration-300 hover:scale-105">
                        <h2 className="text-xl font-bold mb-2">{layer.title}</h2>
                        <p><strong>Data Units:</strong> {layer.dataUnits}</p>
                        <p><strong>Functions:</strong> {layer.functions}</p>
                        {layer.details && <div className="mt-2">{layer.details}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CN

const config = {
    chapters: [
        {
            id: 'story-1',
            type: 'story',
            title: 'A woman walked into a lesbian bar in NYC<br>for the first time',
            backgroundIndex: 0
        },
        {
            id: 'story-2',
            type: 'story',
            title: 'So many women!<br><br>Laughter and conversation filled the air.<br>She sat at the bar, ordered a bourbon, and glanced around.',
            backgroundIndex: 1
        },
        {
            id: 'story-3',
            type: 'story',
            title: 'Her eyes met someone’s—a regular, perhaps.',
            backgroundIndex: 2
        },
        {
            id: 'story-4',
            type: 'story',
            title: 'She smiled friendly, and they sat together.',
            backgroundIndex: 3
        },
        {
            id: 'story-5',
            type: 'story',
            title: 'They started talking and lost track of time…<br><br>"New York is such a paradise for queer!" she remarked',
            backgroundIndex: 4
        },
        {
            id: 'story-6',
            type: 'story',
            title: 'But the woman replied,<br>"Hey, do you know…<br>there are only <span style="color:#FF0EFF;font-weight:normal;">two lesbian bars</span> in Manhattan?"',
            backgroundIndex: 5
        },

        // --------Part 2 — Map + Scroll----------
        {
            id: 'map-1',
            type: 'map',
            alignment: 'split-left',
            title: 'There are over 252,000 bars in New York City.',
            mapLocation: {
                center: [-73.94, 40.73],
                zoom: 10.08
            },
            layersToShow: ['handdrawn-overlay', 'cishet-bars'],
        },
        {
            id: 'map-2',
            type: 'map',
            alignment: 'split-left',
            title: 'Only 57 serve LGBTQ+ communities.',
            mapLocation: {
                center: [-73.94, 40.73],
                zoom: 10.77
            },
            layersToShow: ['handdrawn-overlay', 'lgbtq-bars'],
        },
        {
            id: 'map-3',
            type: 'map',
            alignment: 'split-left',
            title: 'And just 4 are official lesbian bars.',
            mapLocation: {
                center: [-73.96972, 40.70337],
                zoom: 12.32
            },
            layersToShow: ['handdrawn-overlay', 'lesbian-bars'],
        },
        {
            id: 'map-4',
            type: 'map',
            alignment: 'split-left',
            title: 'Absent, or Unheard?',
            description: `
            At first glance, the data tells us a stark story: queer sapphic’s spatial presence is vanishing.

            But is that the full story? Or is it simply the story that’s easy to count?

            Tati, an active sapphic community member and artist, speaks to the difference it makes when a space is designed with queer sapphic in mind:
            <blockquote class="quote">“It’s different having something sapphic... more comfort to be around people who are consciously excluding themselves from patriarchy—rather than being in a space where queerness still includes men.”</blockquote>
        `,
            mapLocation: {
                center: [-73.94, 40.73],
                zoom: 11.5
            },
            layersToShow: ['handdrawn-overlay', 'lesbian-bars'],
        },

        {
            id: 'map-5',
            type: 'chart',
            alignment: 'split-left',
            chartId: 'line-chart-bars',
            description: `From 1977 to 1992, lesbian bars in the U.S. rose briefly—then rapidly declined. The numbers suggest collapse. But part of that collapse was already written into how the data was collected.
            
            As sociologist Greggor Mattson notes, the national bar guides tracking queer spaces were produced by all-male teams until the early ‘90s. Lesbian bars were likely undercounted—not absent, just unacknowledged. A woman’s guide didn’t appear until 1990. Before that, lesbian life largely existed in the margins of male-centric records.
            
            The maps we inherit often reflect the eyes that made them.`
        },
        {
            id: 'map-6',
            type: 'map',
            alignment: 'split-left',
            title: 'Beyond Nightlife',
            mapLocation: {
                center: [-73.94, 40.73],
                zoom: 10.3
            },
            layersToShow: ['handdrawn-overlay', 'Gwendolyn Stegall data-layer'],
            description: `
            Gwendolyn Stegall has compiled a database that documents the opening and closing of queer sapphic’s spaces in New York City, including bars, events, and pop-ups, over decades. This new map not only traces the flux of bar spaces, but also broadens the narrative beyond nightlife persistence.
                        
            Still, the data reflects certain biases.
                        
            The presence or absence of bars often says more about what was documented than what actually existed. For example, the notable cluster of Harlem bars in the 1930s appears largely due to the inclusion of the Map of Harlem Night Spots Frequented by African American Lesbians in the 1930s and 1940s, from The Other Black Woman.`,
        },
        {
            id: 'map-7',
            type: 'text',
            title: 'What maps don’t show',
            description: `
            Maps don’t reveal who felt welcome, who felt priced out, or who chose not to enter. 
            <blockquote class="quote">“When I talk about money... I’m not earning a steady paycheck yet, so that definitely shapes the kinds of places I end up going to and what feels accessible to me right now.”<span style="font-style: normal;"> — Alex</span></blockquote>

            They can’t capture how someone adjusts their posture, or who hesitates at the door.
            <blockquote class="quote">“I attend women’s and non-binary community events in my friend’s living rooms near K-Town or in Brooklyn, making me feel safe and comfortable.”<span style="font-style: normal;"> — Kloe, a non-binary woman</span></blockquote>
            
            Some places feel safe, others don’t. But maps aren’t sensitive to atmosphere. They don’t read discomfort, silence, or relief. 
            <blockquote class="quote">“There’s something comforting about going to an intentionally sapphic space, where everyone knows why they’re there—even if it’s unspoken.”<span style="font-style: normal;"> — Esha​</blockquote>
            
            Access is shaped by more than geography. It depends on cost, gender expression, social dynamics, and who’s already present.
            Maps record presence. But they can’t show how space feels.`
        },
        {
            id: 'map-8',
            type: 'right-compare',
            alignment: 'split-left',
            title: 'Then and Now',
            media: {
                before: 'assets/images/1past.jpg',
                after: 'assets/images/1present.jpg'
            },
            title: 'Why Queer Sapphic Spatiality Matters',
            description: `
            The scarcity of lesbian bars, and the way they’ve been tracked, remembered, or omitted, points to a deeper issue: queer sapphic have rarely been centered in spatial narratives.
            
            In queer culture, sapphic individuals are often peripheral to spaces dominated by gay male visibility. In mainstream feminist spaces, queerness is frequently sidelined. For many queer sapphic, neither world feels fully theirs.
            
            This double exclusion doesn’t lead to absence. Instead, it leads to adaptation. Their spatial practices are often quieter and more flexible, shaped through negotiation rather than immediate recognition. What they do often appears coded, relational, and subtle—never simply absent.`
        },

        {
            id: 'map-9',
            type: 'text',
            title: 'Positioned by Experience',
            description: `
            These complex negotiations don’t stem from theory alone—they come from lived experiences.
            
            Different people’s perception of "spatial boundaries" comes from their experiential positions (gender presentation, family, class, race, immigrant background)`,
        },

        {
            id: 'map-10',
            type: 'grid',
            alignment: 'split-left',
            description: `
            These drawings—some crowded, some nearly blank—reflect how each person approaches the idea of space.
            They do not map where they went, but how they move, hesitate, remember, or hold back.
            <ul style="font-size: 0.8em;">
            <li>Someone grew up in a family environment that discourages expression. She is used to taking a step back, not speaking up, and not entering public queer spaces, even though she cares about the existence of these spaces. For her, "non-participation" is also a response to space.</li>
            <li>Someone carries a deep body memory of "female behavior" from East Asian culture. She manages her queer visibility in space with her sitting posture, clothing, and tattoos, relaxing in familiar occasions and remaining vague in unfamiliar spaces.</li>
            <li>Someone realized her queer identity very early and is more familiar with how to move freely in the city. She does not rely on formal queer places, but believes that the atmosphere and experience generated in relationships allow her to "make places queer."</li>
            <li>Someone is active in queer nightlife and sees the power inequality in it. She actively reconstructs space through drag king performances, community activities, etc., to resist the male-dominated or gender-exclusive structure in queer places.</li>
            <li>Some people participated in the construction of sapphic-only spaces as community organizers, and at the same time reflected on the formation mechanism of thresholds: price, atmosphere, and way of speaking all effect who can stay. Her spatial awareness is clearly critical and is constantly adjusting.</li>
            </ul>`,
            column: 3
        },

        {
            id: "map-10.1",
            type: "grid",
            alignment: "split-left",
            description: `Queer sapphic are not a naturally united group, they must first "perceive each other", which is itself part of the spatial practice. These internalized spatial logics form invisible maps—maps shaped not by streets, but by silence, memory, and resistance.`,
            column: 3
        },

        {
            id: 'map-11',
            type: 'map',
            alignment: 'split-left',
            description: `Yet even when places overlap, experiences rarely do.
            
            Take Henrietta Hudson, one of the few remaining lesbian bars in New York.
            For some, it offers a rare sense of recognition—a place where sapphic belonging feels assumed rather than negotiated.
            For others, it carries the weight of cost barriers, shifting atmospheres, and a growing sense of distance from what was once imagined.`,
            mapLocation: {
                center: [-73.95, 40.73],
                zoom: 10.2
            },
            layersToShow: ['handdrawn-overlay', 'handdrawn-combined-layer']
        },

        {
            id: 'map-12',
            type: 'map',
            alignment: 'split-left',
            description: `Public spaces, too, unfold differently depending on who enters.
            In Prospect Park, the wide lawns and wooded paths feel expansive to some, offering a rare softness in the urban fabric.
            To others, the park’s openness comes with ambiguity: safety changes with time of day, weather, and who else claims the space.
            These differences don’t cancel each other out.
            They weave a richer, messier tapestry of what "queer space" means in practice—not as a fixed category, but as a constantly shifting field of negotiation, memory, and relation.`,
            mapLocation: {
                center: [-73.96972, 40.70337],
                zoom: 12
            },
            layersToShow: ['handdrawn-overlay', 'handdrawn-combined-layer']
        },

        {
            id: 'map-13',
            type: 'image',
            alignment: 'split-left',
            title: 'Different scales, different practice',
            description: `
            These layered experiences remind us that queer space is not just a matter of location, but of how people navigate, reshape, and quietly remake the spaces around them.
            Scale matters, but so do gestures—both the visible acts of claiming space and the quieter adjustments that allow one to stay.
            This tension between visibility and silence plays out not just across identities, but across space itself.
            <ul style="font-size: 0.8em; white-space: normal;">
            <li>Some take on the role of creating space—structuring gatherings, shaping tone, and setting the terms of presence. </li>
            <li>Others move more cautiously, entering spaces and waiting to feel them out before choosing to stay. </li>
            <li>Some shift between roles, both organizing and observing, navigating what’s expected and what’s possible.</li>
            But claiming space isn’t always large-scale. It also happens in subtle, everyday gestures. For many, the work happens in the smallest gestures: a posture adjusted, a gaze avoided, or speaking out in cyberspace.
            These practices are relational. They take shape not in isolation, but through reading others, being read, and adjusting in response.`,
            media: 'assets/icon/icon-legend-1.png'
        },
        {
            id: 'map-14',
            type: 'image',
            alignment: 'split-left',
            title: 'How do they negotiate border power?',
            media: 'assets/icon/icon-legend-1.png',
            description: `
            Some leave frat parties to escape objectification; some retreat from gay bars where women still feel peripheral. Others explore how to speak and listen in ways that gently redraw the lines of intimacy. Boundaries aren’t fixed—they’re felt, renegotiated, even deferred.
            Boundaries are not binary, they are a process of repeated negotiation, perception, and even delay.
            These negotiations are not just about self-protection, but about creating new scales.`
        },
        {
            id: 'map-14.5',
            type: 'image',
            alignment: 'split-left',
            title: 'Becoming Constellations',
            media: 'assets/icon/icon-legend-1.png',
            description: `
            <ul style="white-space: normal;">
            <li>Jean’s transition from bar to drag king is to create a performance space that is not driven by the male gaze</li>
            <li>Jesse uses MOOR to weave a spatial protocol so that silent people can speak</li>
            <li>Alex feels "queer moments" when riding subway and chatting in the living room</li>
            <li>J seldom entered a lesbian bar or came out publicly, but every time she exits is political: she is guarding a possibility</li>
            <li>Kloe reflects on the sense of belonging of "relationship rather than space" in feminist group</li>
            </ul>
            These people do not belong to a unified group, but they form a non-linear, mutually responsive constellation.
            Not represent, but resonate.`
        },
        {
            id: 'map-15.0',
            type: 'grid',
            alignment: 'split-left',
            title: 'The Politics of Mapping',
            media: 'assets/icon/icon-legend-1/png',
            description: `
            A map is not just where someone has been. It’s where someone was willing to claim presence.

            Some maps are nearly blank—not because nothing happened, but because no place felt nameable.
            Others overflow with fragments: street corners, memories, a look exchanged.`,
            keep_list: ['Esha', 'J'],
            column: 2
        },
        {
            id: 'map-15',
            type: 'map',
            alignment: 'split-left',
            mapLocation: {
                center: [-73.94, 40.73],
                zoom: 10.2
            },
            description: `
            As a practice of social-spatial identity, the map itself is a spatial practice. 

            Mapping is not just a representational tool. It is a political decision: what gets included, what remains unsaid, and how presence is defined through the act of drawing.

            If absence is political, then so is drawing it.`,
            layersToShow: ['handdrawn-overlay', 'Gwendolyn Stegall data-layer']
        },
        {
            id: 'map-16',
            type: 'map',
            alignment: 'split-left',
            title: 'What is the future?',
            description: `While many mourn the disappearance of lesbian bars, a better future may not lie in simply restoring what was lost, but in expanding what counts.
            
            Several interviewees imagine queer futures rooted not just in nightlife, but in the everyday:
            a shared house near Rockaway beach for surf meetups and cookouts; informal sports groups where anyone can show up and play without knowing the right people; and systems of sharing that don’t rely on being in the right bar at the right time.`,
            mapLocation: {
                center: [-73.818, 40.583],
                zoom: 13
            },
            layersToShow: ['handdrawn-overlay', 'handdrawn-combined-layer']
        },
        {
            id: 'map-17',
            type: 'map',
            alignment: 'split-left',
            description: 'Quote of Julia’s dream',
            mapLocation: {
                center: [-73.818, 40.583],
                zoom: 14
            },
            layersToShow: ['handdrawn-overlay', 'handdrawn-combined-layer']
        },
        {
            id: 'map-18',
            type: 'map',
            alignment: 'split-left',
            description: `These spaces don’t always announce themselves. They emerge in activity, relationship, and rhythm. As one interviewee put it:

            “I don’t want to have to seek out queer spaces, they should appear around me.”`,
            mapLocation: {
                center: [-73.818, 40.583],
                zoom: 11
            },
            layersToShow: ['handdrawn-overlay', 'handdrawn-combined-layer', 'icon-layer'],
        },
        {
            id: 'map-19',
            type: 'full-compare',
            description: `Preserving lesbian bars still matters. But so does imagining what else queer space could be: not only rooms with a sign on the door, but moments of recognition, softness, and shared intent.

            The future may not be more bars.

            It may be more ways to be together.`,
            media: {
                before: 'assets/images/2present.jpg',
                after: 'assets/images/2future.jpg'
            }
        },
        //  -------Part 3: Interviews Section----------------
        {
            id: 'interview-section',
            type: 'interview',
            title: 'Listen to Their Stories',
            alignment: 'full',
        },
        // Footer Section
        {
            id: 'footer',
            type: 'footer',
            alignment: 'full',
            title: 'Sources',
            description: 'This project is a part of the Queer Space Project, a research initiative that aims to document and analyze the history and current state of LGBTQ+ spaces in New York City.<br><ul><li>NYC Open Data: NYC Liquor License Listings (2024)</li><li>Queer Space Project Database (2020–2023)</li><li>Interviews conducted by Yuki Zhang, Spring 2025</li><li>Map styles adapted from Mapbox Studio</li></ul>',
            content: '© 2025 Hidden Constellations · Designed by Yuki Zhang · Powered by Mapbox & Scrollama',
            backgroundIndex: null
        },
    ],
    people: [
        {
            name: 'Jean',
            sentence: 'She envisions sapphic space as shaped by shared energy, mutual understanding, and care.',
            avatar: 'assets/icon/1.png',
            brief: [
                'Pronouns: she-they',
                '9th year in NYC',
                'Core member of Sapphic Surf, surf instructor'
            ],
            full: `Tati’s relationship to space is relational and energetic—she notices how safety, camaraderie, and gentleness shape how people show up and connect. In Sapphic Surf, she saw people more willing to take risks in the water because the environment was affirming and respectful. “The etiquette was a little more respected... people cheering once you got a wave, that kind of energy.” Her interest in the group emerged not just from love of surfing, but from the absence of spaces where queer women could gather without being centered on men or substance-driven nightlife.

            For Tati, the term “sapphic” offers both a clearer emotional boundary and more fluid entry points. “It’s different having something like sapphic vs. the umbrella of queer... to be around people who are consciously excluding themselves from patriarchy.” She values the community’s informal nature—there’s no strict vetting—but she trusts that those who come in know how to respect the space. “People have been pretty good at making the determination of: do I identify as sapphic, am I an ally to this community...”

            While she sees the group as welcoming, she doesn’t shy away from noting the gendered imbalance of queer spaces: “We need more [lesbian bars]!” Her vision for space is everyday, joyful, and anchored in emotional safety. She speaks warmly about the idea of building a home base for Sapphic Surf, a place to extend the vibe beyond the water into meals, movie nights, and shared rituals. Her reflections suggest that queer women’s spaces don’t need rigid borders—but they do need intentionality, rhythm, and softness.`,
            map: {
                path: 'assets/images/handdrawn_map1.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                hint: 'Beach',
                description: 'Sapphic Surf is a grassroots organization that promotes sapphic-centered public space through surfing. They organize events and activities that foster community and connection among queer'
            }
        },
        {
            name: 'Kloe',
            sentence: 'They value sapphic-centered spaces as sites of emotional safety and shared understanding, a stance shaped by internalized sexual shame from East Asian upbringing and their ongoing search for intimacy beyond binary gender norms.',
            avatar: 'assets/icon/2.png',
            brief: [
                'Pronouns: she/they',
                '9th Year in NYC',
                'Core member of Sapphic Surf, surf instructor'
            ],
            full: `Kloe describes queer women's spaces as emotionally resonant environments that allow  them to feel seen, understood, and protected. Coming from an East Asian cultural context where sexuality was burdened with shame, Kloe’s exploration of identity unfolded gradually, finding strength in sapphic spaces and emotionally supportive feminist communities in New York.

            Their complex views on spatial boundaries reflect an internal tension: politically, they champion fluid, dynamic borders in order to create more inclusive futures, but personally they maintain strong boundaries as a strategy of self-protection.  Now living in New York, they continue to rely on these boundaries in heteronormative or male-dominated spaces, which she finds emotionally unsafe and physically charged. They resist the over-definition of queer spaces, arguing that labels can create exclusion, yet they actively seeks out safe, sapphic-centered environments—especially when in group settings.

            Kloe's ideal world is one where queer presence is normalized across all contexts—academic, social, and urban. Visibility, to them, is not just political but deeply emotional: it means not having to search, but being seen without asking. As they reflect, “I don’t want to have to seek out queer spaces—they should appear around me.”`,
            quotes: `"[The sense of shame about sex comes from] society. This is a theory that has been instilled in us since childhood, especially in East Asian education."

            "I am good at drawing boundaries... Drawing boundaries is a way for me to resist or seize power."

            "I think people will occupy a more important part [in queer spaces] ... It's like you can feel some changes in the magnetic field. If there are no people in the space, this space is meaningless and cold."

            "[Regarding the labels and boundaries of the space] I think marking them out is equivalent to defining the bar. But I think many things are difficult to express with definitions. I think "definition" is equivalent to giving a limitation."

            "I don't need to look for this community, but when this community actively appears in front of me, it makes me feel that this is highly visible."`,
            map: {
                path: 'assets/map/2_Kloe.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                hint: 'Arts and Relationships',
                description: `Kloe's maps include many hidden and informal places. Relationships with people in the space and feelings of safety are elements they often mention when drawing maps. However, the places they draw are far away from where they live, perhaps reflecting accessibility issues.`
            }
        },
        {
            name: 'Jesse',
            sentence: 'With care and precision, she builds spaces where emotion leads and no one voice dominates, favoring healing over performance.',
            avatar: 'assets/icon/3.png',
            brief: [
                'Pronouns: she/her',
                '3rd Year in NYC',
                'Co-founder of MOOR, reflective feminist organizer'
            ],
            full: `Jesse is the founder of the MOOR community. She understands queer women space as an "emotional political structure" rather than a fixed geographical form. She emphasizes healing, inclusiveness and deep listening, and rejects the excessive consumption of sex, gossip and topic dominance in noisy queer culture. The space she created advocates small scale, rotating hosting and familiar atmosphere, responding to the long-standing power issues in queer space, such as "who can speak" and "who has the right to express".

            Jesse pays special attention to the microstructure of spatial power. She pointed out that a trans friend was excluded by straight women's language in a conversation about "age and intimacy", which made her realize that even in a queer women's space that claims to be inclusive, it is necessary to be vigilant about "who is being heard". She used "not daddy vibe" to describe the spatial temperament of MOOR: no authoritarianism, no loud voices, no interrupting, and no naming others. Her support for queer women's space does not come from identity labels, but from the spatial practice of "emotional matching" and "freedom of expression".`,
            quotes: `"What I want to create is a space that pays more attention to each other's status and feelings, a place where people can feel at ease to talk about the issues they care about."

            "Community is such a sensitive thing - it pays attention to vibe, whether you and others are in sync, and whether she can feel that this space is 'for her'."

            "Our community vibe does not welcome the daddy-like aura. I think we are the kind of not daddy vibe (laughs)."`,
            map: {
                path: 'assets/map/3_Jesse.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                hint: 'Social Networks',
                description: 'Jesse focuses on women and non-binary cultural communities, both online and offline.'
            }
        },
        {
            name: 'Alex',
            sentence: 'sentence',
            avatar: 'assets/icon/4.png',
            brief: 'Brief introduction',
            full: 'Text for D’s full interview goes here.',
            quotes: ``,
            map: {
                path: 'assets/map/4_Alex.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                hint: 'Beach',
                description: 'Sapphic Surf is a grassroots organization that promotes sapphic-centered public space through surfing. They organize events and activities that foster community and connection among queer'
            }
        },
        {
            name: 'Julia',
            sentence: 'sentence',
            avatar: 'assets/icon/5.png',
            brief: 'Brief introduction',
            full: 'Text for E’s full interview goes here.',
            quotes: ``,
            map: {
                path: 'assets/map/5_Julia.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                hint: 'Beach',
                description: 'Sapphic Surf is a grassroots organization that promotes sapphic-centered public space through surfing. They organize events and activities that foster community and connection among queer'
            }
        },
        {
            name: 'Tati',
            sentence: 'sentence',
            avatar: 'assets/icon/6.png',
            brief: 'Brief introduction',
            full: 'Text for F’s full interview goes here.',
            quotes: ``,
            map: {
                path: 'assets/map/6_Tati.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                hint: 'Beach',
                description: 'Sapphic Surf is a grassroots organization that promotes sapphic-centered public space through surfing. They organize events and activities that foster community and connection among queer'
            }
        },
        {
            name: 'J',
            sentence: 'sentence',
            avatar: 'assets/icon/7.png',
            brief: 'Brief introduction',
            full: 'Text for G’s full interview goes here.',
            quotes: ``,
            map: {
                path: 'assets/map/7_J.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                hint: 'Beach',
                description: 'Sapphic Surf is a grassroots organization that promotes sapphic-centered public space through surfing. They organize events and activities that foster community and connection among queer'
            }
        },
        {
            name: 'Esha',
            sentence: 'sentence',
            avatar: 'assets/icon/8.png',
            brief: 'Brief introduction',
            full: 'Text for H’s full interview goes here.',
            quotes: ``,
            map: {
                path: 'assets/map/8_Esha.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                hint: 'Beach',
                description: 'Sapphic Surf is a grassroots organization that promotes sapphic-centered public space through surfing. They organize events and activities that foster community and connection among queer'
            }
        },
        {
            name: 'Zao',
            sentence: 'sentence',
            avatar: 'assets/icon/9.png',
            brief: 'Brief introduction',
            full: 'Text for H’s full interview goes here.',
            quotes: ``,
            map: {
                path: 'assets/map/9_Zao.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                hint: 'Beach',
                description: 'Sapphic Surf is a grassroots organization that promotes sapphic-centered public space through surfing. They organize events and activities that foster community and connection among queer'
            }
        },
        {
            name: 'Morgan',
            sentence: 'sentence',
            avatar: 'assets/icon/10.png',
            brief: 'Brief introduction',
            full: 'Text for H’s full interview goes here.',
            quotes: ``,
            map: {
                path: 'assets/map/9_Zao.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                hint: 'Beach',
                description: 'Sapphic Surf is a grassroots organization that promotes sapphic-centered public space through surfing. They organize events and activities that foster community and connection among queer'
            }
        }
    ]
}

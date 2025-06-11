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
            title: 'New York City has more than 250,000 bars.',
            mapLocation: {
                center: [-73.94, 40.73],
                zoom: 10.5
            },
            layersToShow: ['handdrawn-overlay', 'cishet-bars', 'lgbtq-bars'],
        },
        {
            id: 'map-2',
            type: 'map',
            alignment: 'split-left',
            title: 'Of those, only 57 explicitly serve LGBTQ+ communities.',
            mapLocation: {
                center: [-73.94, 40.73],
                zoom: 10.77
            },
            layersToShow: ['handdrawn-overlay', 'lgbtq-bars', 'lesbian-bars'],
        },
        {
            id: 'map-3',
            type: 'map',
            alignment: 'split-left',
            title: 'And only 4 are officially lesbian bars.',
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
            At first glance, the data tells us a stark story: the presence of queer sapphic communities is vanishing..

            But is that the full story? Or is it simply the story that’s easy to count?

            Tati, an active sapphic community member and artist, speaks to the difference it makes when a space is designed with queer sapphic in mind:
            <blockquote class="quote">"It’s different having something sapphic... more comfort to be around people who are consciously excluding themselves from patriarchy—rather than being in a space where queerness still includes men."</blockquote>
        `,
            mapLocation: {
                center: [-73.94, 40.73],
                zoom: 11.5
            },
            layersToShow: ['handdrawn-overlay', 'lesbian-bars', 'lgbtq-bars-dim'],
        },

        {
            id: 'map-5',
            type: 'image',
            alignment: 'split-left',
            media: 'assets/images/chart1.png',
            description: `From 1977 to 1992, lesbian bars in the U.S. rose briefly—then rapidly declined. The numbers suggest collapse. But part of that collapse was already written into how the data was collected.`
        },
        {
            id: 'map-5.1',
            type: 'image',
            alignment: 'split-left',
            media: 'assets/images/chart2.png',
            description: `As sociologist <a href="https://doi.org/10.1177/2378023119894832" target="_blank" rel="noopener noreferrer" style="color: #FF0EFF;">Greggor Mattson</a> notes, the national bar guides tracking queer spaces were produced by all-male teams until the early '90s. Lesbian bars were likely undercounted—not absent, just unacknowledged. A woman’s guide didn’t appear until 1990. Before that, lesbian life largely existed in the margins of male-centric records.
            
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
            <a href="http://map.addressesproject.com/" target="_blank" rel="noopener noreferrer" style="color: #FF0EFF;">Gwendolyn Stegall</a> has compiled a database that documents the opening and closing of queer sapphic’s spaces in New York City, including bars, events, and pop-ups, over decades. This new map not only traces the flux of bar spaces, but also broadens the narrative beyond nightlife persistence.
                        
            Still, the data reflects certain biases.
                        
            The presence or absence of bars often says more about what was documented than what actually existed. For example, the notable cluster of Harlem bars in the 1930s appears largely due to the inclusion of the Map of Harlem Night Spots Frequented by African American Lesbians in the 1930s and 1940s, from The Other Black Woman.
            
            
            <span style="font-size: 0.8em; color: #FF0EFF">Drag the slider to view the changes.</span>`,        
        },
        {
            id: 'map-7',
            type: 'text',
            title: 'There are limits to what maps can show',
            description: `
            Maps don’t reveal who felt welcome, who felt priced out, or who chose not to enter. 
            <blockquote class="quote">"When I talk about money... I’m not earning a steady paycheck yet, so that definitely shapes the kinds of places I end up going to and what feels accessible to me right now."<span style="font-style: normal;"> — Alex</span></blockquote>

            They can’t capture how someone adjusts their posture, or who hesitates at the door.
            <blockquote class="quote">"I attend women’s and non-binary community events in my friend’s living rooms near K-Town or in Brooklyn, making me feel safe and comfortable."<span style="font-style: normal;"> — Kloe, who identifies as a non-binary femme</span></blockquote>
            
            Some places feel safe, others don’t. But maps aren’t sensitive to atmosphere. They don’t read discomfort, silence, or relief. 
            <blockquote class="quote">"There’s something comforting about going to an intentionally sapphic space, where everyone knows why they’re there—even if it’s unspoken."<span style="font-style: normal;"> — Esha​</blockquote>
            
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
            title: 'Why Queer Sapphic Spatiality Matters ',
            description: `
            The scarcity of lesbian bars, and the way they’ve been tracked, remembered, or omitted, points to a deeper issue: queer sapphic have rarely been centered in spatial narratives.
            
            In queer culture, sapphic individuals are often peripheral to spaces dominated by gay male visibility. In mainstream feminist spaces, queerness is frequently sidelined. For many queer sapphic, neither world feels fully theirs.
            
            This double exclusion doesn’t lead to absence. Instead, it leads to adaptation. Their spatial practices are often quieter and more flexible, shaped through negotiation rather than immediate recognition. What they do often appears coded, relational, and subtle—never simply absent.`,
            compare_note: `Past & Present at the Former Site of the Duchess / Grove / Pandora’s Box (lesbian bars from 1970s to 1990s).`
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
            </ul>

            <span style="font-size: 0.8em; color: #FF0EFF">Click the map to see more details.</span>`,
            column: 3
        },

        {
            id: "map-10.1",
            type: "grid",
            alignment: "split-left",
            description: `Queer sapphic are not a naturally united group, they must first "perceive each other", which is itself part of the spatial practice. These internalized spatial logics form invisible maps—maps shaped not by streets, but by silence, memory, and resistance.
            
            <span style="font-size: 0.8em; color: #FF0EFF">Click the map to see more details.</span>`,
            column: 3
        },

        {
            id: 'map-11',
            type: 'map',
            alignment: 'split-left',
            description: `Yet even when places overlap, experiences rarely do.
            
            Take West Village, one of the few neighborhoods where lesbian bars still remain.
            For some, it offers a rare sense of recognition—a place where sapphic belonging feels assumed rather than negotiated.
            For others, it carries the weight of cost barriers, shifting atmospheres, and a growing sense of distance from what was once imagined.`,
            mapLocation: {
                center: [-74.006, 40.735],
                zoom: 13.5
            },
            layersToShow: ['handdrawn-overlay', 'lesbian-bars', 'handdrawn_overlay_west_village-layer']
        },

        {
            id: 'map-12',
            type: 'map',
            alignment: 'split-left',
            description: `Public spaces, too, unfold differently depending on who enters.
            In Prospect Park, the wide lawns and wooded paths feel expansive to some, offering a rare softness in the urban fabric. To others, the park’s openness comes with ambiguity: safety changes with time of day, weather, and who else claims the space.
            These differences don’t cancel each other out.
            They weave a richer, messier tapestry of what "queer space" means in practice—not as a fixed category, but as a constantly shifting field of negotiation, memory, and relation.`,
            mapLocation: {
                center: [-73.968, 40.662],
                zoom: 14
            },
            layersToShow: ['handdrawn-overlay', 'lesbian-bars', 'handdrawn_overlay_west_village-layer']
        },

        {
            id: 'map-13',
            type: 'image',
            alignment: 'split-left',
            title: 'Different scales, different practice',
            media: 'assets/icon/icon-legend-1.png',
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
            media: 'assets/icon/icon-legend-2.png',
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
            media: 'assets/icon/icon-legend-3.png',
            description: `
            <ul style="white-space: normal;">
            <li>Jean, Zao, and Morgan contribute to queer spaces led by women and gender-diverse people—through performance, soft gatherings, and everyday acts of advocacy—spaces that are relational, culturally grounded, and inclusive beyond mainstream gay venues.</li>
            <li>Jesse and Kloe nurture women and non-binary communities where healing, mutual recognition, and gentle boundaries matter more than fixed identities or rigid labels.</li>
            <li>Alex, J and Morgan find queer moments in the everyday—in subways, living rooms, and quiet gestures—where intimacy arises not from architecture, but from shared presence and emotional attunement.</li>
            <li>Julia and Tati embrace women-led physical spaces like basketball courts, challenging gendered hierarchies within the broader queer landscape and advocating for sapphic-specific visibility.</li>
            <li>J and Esha reflect on how racial and cultural backgrounds shape queer expression, gravitating toward spaces where intersectional identities can be safely and self-authored.</li>
            </ul>
            These threads do not form a single narrative, but a constellation—nonlinear, interdependent, and alive with shared frequencies of presence, resonance, and becoming.  
            <em>Not to represent, but to resonate.</em>`
        },
        {
            id: 'map-15.0',
            type: 'grid',
            alignment: 'split-left',
            title: 'The Politics of Mapping',
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
                center: [-73.94, 40.68],
                zoom: 11
            },
            description: `
            As a practice of social-spatial identity, the map itself is a spatial practice. 

            Mapping is not just a representational tool. It is a political decision: what gets included, what remains unsaid, and how presence is defined through the act of drawing.

            If absence is political, then so is drawing it.
            
            <span style="font-size: 0.8em; color: #FF0EFF">Click the icon to show the cognitive map.\nClick again to hide.</span>`,
            layersToShow: ['handdrawn-overlay', 'Gwendolyn Stegall data-layer'],
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
                center: [-73.94, 40.73],
                zoom: 10.5
            },
            layersToShow: ['handdrawn-overlay', 'handdrawn-combined-layer']
        },
        {
            id: 'map-17',
            type: 'map',
            alignment: 'split-left',
            description: `<blockquote class='quote'>Ideally, we would want to have a house in Rockaway. And then have a home base to have the group over for a cookout afterward, or like a place to rinse off. Or something more centered there. Because we do—I call them “land activities”—but like hangouts in Brooklyn or Manhattan. Just not centered around surfing. Like, we had a watch party for the Olympics, or just casual things like that. I think it would be fun to have a home-base house, and then maybe go on trips. Like small group surf trips to other places.<span style='font-style: normal;'> — Julia</span></blockquote>`,
            mapLocation: {
                center: [-73.818, 40.583],
                zoom: 12
            },
            layersToShow: ['handdrawn-overlay', 'handdrawn-combined-layer']
        },
        {
            id: 'map-18',
            type: 'map',
            alignment: 'split-left',
            description: `These spaces don’t always announce themselves. They emerge in activity, relationship, and rhythm. As one interviewee put it:

            "I don’t want to have to seek out queer spaces, they should appear around me."`,
            mapLocation: {
                center: [-73.94, 40.73],
                zoom: 10.5
            },
            layersToShow: ['handdrawn-overlay', 'handdrawn-combined-layer', 'icon-layer'],
        },
        {
            id: 'map-19',
            type: 'full-compare',
            description: `Preserving lesbian bars still matters. 
            <span style='font-weight: bold;'>But so does imagining what else queer space could be</span>: 
            not only rooms with a sign on the door, 
            but moments of recognition, softness, and shared intent.

            The future may not be more bars.

            It may be <span style='font-weight: bold;'>more ways to be together.</span>`,
            media: {
                before: 'assets/images/2present.jpg',
                after: 'assets/images/2future.jpg'
            },
            compare_note: `Present & Future: At a former lesbian bar site, the 3rd Bar thrives and influences its surroundings, encouraging a sense of inclusion and community-oriented change.`
        },
        //  -------Part 3: Interviews Section----------------
        {
            id: 'interview-section',
            type: 'interview',
            title: 'Listen to Their Stories',
            description: '<span style="font-size: 0.9em; color: #FF0EFF">Click on the avatars to read their stories.</span>',
            alignment: 'full',
        },
        // Footer Section
        {
            id: 'footer',
            type: 'footer',
            alignment: 'full',
            title: 'Sources',
            description: `This project is a part of the class ARCH 6132: Intermediate Applications <span style="font-style: italic;">(Threads – Storytelling with Maps and Data)</span> instructed by Juan Francisco Saldarriaga
            
            Data Source
            <ul>
            <li>NYC Open Data <a href="https://opendata.cityofnewyork.us/" target="_blank" rel="noopener noreferrer" style="color: #FF0EFF;">(Links)</a></li>
            <li>NYC LGBT Historic Sites Project <a style="color: #FF0EFF" href="https://www.nyclgbtsites.org/" target="_blank" rel="noopener noreferrer">(Links)</a></li>
            <li>Mattson, G. (2019). Are Gay Bars Closing? Using Business Listings to Infer Rates of Gay Bar Closure in the United States, 1977–2019. Socius, 5. <a style="color: #FF0EFF" href="https://doi.org/10.1177/2378023119894832" target="_blank" rel="noopener noreferrer">(Links)</a></li>
            <li>Mattson, G. (2021, June 16). The changing mix of gay bar subtypes after COVID-19 restrictions in the United States, 2017-2023. <a style="color: #FF0EFF" href="https://doi.org/10.31235/osf.io/4uw6j" target="_blank" rel="noopener noreferrer">(Links)</a> </li>
            <li>Addresses Project by Gwen Shockey <a style="color: #FF0EFF" href="https://addressesproject.com/" target="_blank" rel="noopener noreferrer">(Links)</a> </li>
            <li>Stegall, G. (2019). A Spatial History of Lesbian Bars in New York City. <a style="color: #FF0EFF" href="https://doi.org/10.7916/d8-k46h-fa23" target="_blank" rel="noopener noreferrer">(Links)</a></li>
            
            </ul>
            Other Source
            <ul>
            <li>Interviews conducted by Yuki Zhang, Spring 2025</li>
            <li>Map styles adapted from Mapbox Studio</li>
            <li>Visualization and Website Design refers to canner.nyc <a style="color: #FF0EFF" href="https://canners.nyc" target="_blank" rel="noopener noreferrer">(Links)</a> and Feminist Spatial Practice <a style="color: #FF0EFF" href="https://feministspatialpractices.com/" target="_blank" rel="noopener noreferrer">(Links)</a></li>
            <li>Narrative is inspired by: Oswin, N. (2008). Critical geographies and the uses of sexuality: deconstructing queer space. Progress in Human Geography, 32(1), 89-103. <a style="color: #FF0EFF;" href="https://doi.org/10.1177/0309132507085213" target="_blank" rel="noopener noreferrer">(Links)</a> And Constellating Queer Spaces (2018) <a style="color: #FF0EFF;" href="https://urbanomnibus.net/2018/02/constellating-queer-spaces/" target="_blank" rel="noopener noreferrer">(Links)</a></li>
            </ul>`,
            content: '© 2025 Hidden Constellations · Designed by Yuki Zhang · Powered by Mapbox & Scrollama',
            backgroundIndex: null
        },
    ],
    people: [
        {
            name: 'Jean',
            sentence: 'With a mix of care and urgency, she holds onto lesbian visibility as queer spaces shift and fade around her.',
            avatar: 'assets/icon/1.png',
            brief: [
                'Pronouns: she/her',
                '3rd Year in NYC',
                'Lesbian bar worker, drag king, active in online lesbian community'
            ],
            full: `Jean examines the loss and response of lesbian space from a historicized and politicized perspective. She not only works at a lesbian bar, but also participates in it as a drag king, forming a deep understanding of women's visibility and spatial power dynamics. She is clearly aware that in this era and its subsequent political tendencies, the visibility and right to exist of the lesbian community are structurally squeezed, which makes her understand visibility as a kind of survival: "It's about survival, honestly... if we miss it, things will just keep fading."

            Jean points out that more and more lesbian spaces are turning to temporary gatherings, social apps, or "feminine" places with vibes as clues, such as basketball courts, feminist reading clubs, private living rooms, etc. These spaces cannot be mapped, but they maintain community ties through "queer code". But for her, the disappearance of spatial boundaries is not equivalent to freedom, it may mean aphasia and being replaced.

            She clearly expressed her support for spaces exclusively for queer women: "A lot of them have shut down... Even if we’re not at risk of closing, it still feels urgent to make lesbian spaces more visible." At the same time, she also criticized the exclusion of gay male-dominated spaces, believing that lesbian culture and social needs are often marginalized or misunderstood in umbrella queer spaces.`,
            quotes: `<blockquote class='quote'>"It’s not just about bars anymore... they’re harder to map. And also, the boundaries are fuzzy... We find our own codes—queer codes—in other places."</blockquote>
            <blockquote class='quote'>"There’s a real risk of erasure."</blockquote>
            <blockquote class='quote'>"These spaces are essential, but if no one shows up, they disappear."</blockquote>`,
            map: {
                path: 'assets/map/1_Jean.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                hint: 'Zoning',
                description: 'Jean traces queer space through boundaries—social, cultural, and emotional—revealing how certain areas feel saturated, others invisible, and many shaped by who is allowed in or left out.'
            },
            icon_map: {
                 path: 'assets/icon-map/1.png',
                 coordinates: [
                     [-74.20, 40.95],
                     [-73.68, 40.95],
                     [-73.68, 40.52],
                     [-74.20, 40.52]
                 ],
                 icon_coordinates: [-73.9898, 40.6658],
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

            Kloe's ideal world is one where queer presence is normalized across all contexts—academic, social, and urban. Visibility, to them, is not just political but deeply emotional: it means not having to search, but being seen without asking. As they reflect, "I don’t want to have to seek out queer spaces—they should appear around me."`,
            quotes: `<blockquote class='quote'>"[The sense of shame about sex comes from] society. This is a theory that has been instilled in us since childhood, especially in East Asian education."</blockquote>

            <blockquote class='quote'>"I am good at drawing boundaries... Drawing boundaries is a way for me to resist or seize power."</blockquote>

            <blockquote class='quote'>"I think people will occupy a more important part [in queer spaces] ... It's like you can feel some changes in the magnetic field. If there are no people in the space, this space is meaningless and cold."</blockquote>

            <blockquote class='quote'>"[Regarding the labels and boundaries of the space] I think marking them out is equivalent to defining the bar. But I think many things are difficult to express with definitions. I think "definition" is equivalent to giving a limitation."</blockquote>

            <blockquote class='quote'>"I don't need to look for this community, but when this community actively appears in front of me, it makes me feel that this is highly visible."</blockquote>`,
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
            },
            icon_map: {
                path: 'assets/icon-map/2.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                icon_coordinates: [-73.9648, 40.8029],
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
            quotes: `<blockquote class='quote'>"What I want to create is a space that pays more attention to each other's status and feelings, a place where people can feel at ease to talk about the issues they care about."</blockquote>
            <blockquote class='quote'>"Community is such a sensitive thing - it pays attention to vibe, whether you and others are in sync, and whether she can feel that this space is 'for her'."</blockquote>
            <blockquote class='quote'>"Our community vibe does not welcome the daddy-like aura. I think we are the kind of not daddy vibe (laughs)."</blockquote>`,
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
            },
            icon_map: {
                path: 'assets/icon-map/3.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                icon_coordinates: [-73.9864, 40.6941],
            }
        },
        {
            name: 'Alex',
            sentence: 'She maps queerness through memory and emotion, weaving together nightlife, intimate everyday spaces, and subtle moments of shared recognition.',
            avatar: 'assets/icon/4.png',
            brief: [
                'Pronouns: she/her',
                '3rd Year in NYC',
                'nightlife-involved Design student'
            ],
            full: `Alex describes queer space as a kind of "emotional geography". She is not bound by specific places, but tracks how situations, memories and relationships make space queer. She navigates a layered queer geography that includes both nightlife scenes like Industry in Hell’s Kitchen—often shaped by gay male circles—and women-centered bars like Cubbyhole, as well as more intimate, everyday spaces: subway rides, video game cafés, shared living rooms, and quiet walks through Brooklyn with her partner.

            She frankly admitted that after the emergence of dating apps, she no longer insisted on specific queer places because "the threshold for confirming that you are queer has been completed online", so all cafés, parks, and museums may become her queer space. This attitude not only shows a kind of spatial freedom, but also reveals the current situation that queer women's space is gradually becoming private and non-public.

            While she still appreciates spaces like Cubbyhole, she’s noticed that others around her aren’t always as eager to return. "I expected a bit more excitement or openness," she remarked, surprised by the lack of shared enthusiasm. Queer women’s spaces continue to resonate with her, though her approach is more emotional and non-institutional. She doesn’t emphasize clear boundaries, but is always looking for places where queer emotional resonance can emerge. `,
            quotes: `<blockquote class='quote'>"The apartment itself—specifically the living room—became a huge space for long conversations, emotional processing, and identity talk... It felt like this little sanctuary."</blockquote>

            <blockquote class='quote'>"I guess I do still feel like certain things are different. Like I think maybe once it gets down to the level of nightlife, maybe there's like enough [difference]..."</blockquote>

            <blockquote class='quote'>"My girlfriend has mentioned a few times that she really enjoyed being part of a sapphic surfing club… it reminded me how queerness can be embedded not just in the people who show up, but in how a group is organized."</blockquote>`,
            map: {
                path: 'assets/map/4_Alex.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                hint: 'Memory',
                description: 'Alex’s map is based on her relationship experiences and memories, and is not limited to labeled sapphic spaces.'
            },
            icon_map: {
                path: 'assets/icon-map/4.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                icon_coordinates: [-73.9299, 40.7070],
            }
        },
        {
            name: 'Julia',
            sentence: 'She transforms a male-dominated surf zone into a joyful, sapphic gathering grounded in shared presence and ease.',
            avatar: 'assets/icon/5.png',
            brief: [
                'Pronouns: She/her',
                '7th Year in NYC',
                'Co-founder of Sapphic Surf'
            ],
            full: `Julia brings a deeply personal history to her understanding of space and power. Having grown up surfing competitively in male-dominated environments, she witnessed how men in the water would ignore, cut off, or even verbally undermine women— "They’ll say things like, 'Oh, I didn’t expect you to actually catch that.’" These experiences shaped her appreciation for what it meant to reverse that dynamic with Sapphic Surf, a group where dozens of women and sapphic individuals claimed visibility and joy together in the water. "I could see guys looking over and feeling small... They’re territorial about their breaks... But it’s a beach—it’s huge. Nobody owns it."

            Her view of space is grounded in physical presence and communal rhythm. Unlike bar-based queer scenes where she previously socialized—often in lesbian bars like Cubbyhole or Henrietta Hudson—surfing offered something lighter, freer, and less dependent on alcohol or performance. While she acknowledges that Sapphic Surf is lesbian-centered, she doesn’t enforce hard boundaries, instead trusting in shared social cues: "Anybody could come and feel—I think—feel welcome. I hope so."

            When asked about the lack of lesbian bars in NYC, her reaction is clear: "It is sad." She acknowledges that even the existing bars are "becoming progressively less sapphic," and she expresses a desire to expand Sapphic Surf into a permanent base in Rockaway—"a house, a place to rinse off, cookout, hang out." Her reflections reveal a longing for spaces that are both rooted and open, where women are not just included, but prioritized.`,
            quotes: `<blockquote class='quote'>"Men typically don’t [drop in] to each other—but they do it to women a lot... They don’t even see that you exist."</blockquote>
            
            <blockquote class='quote'>"Surfing’s a really male-dominated sport... I was used to being the only girl around a bunch of guys in the water."</blockquote>

            <blockquote class='quote'>"Then suddenly seeing the roles reversed—I could see guys looking over and feeling small in the water."</blockquote>`,
            map: {
                path: 'assets/map/5_Julia.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                hint: 'Connected Islands',
                description: 'Julia, a long-time surfer, sees Brooklyn as an island, focusing on parks, water, and the party atmosphere around her address.'
            },
            icon_map: {
                path: 'assets/icon-map/5.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                icon_coordinates: [-73.9299, 40.6936],
            }
        },
        {
            name: 'Tati',
            sentence: 'She envisions sapphic space as shaped by shared energy, mutual understanding, and care.',
            avatar: 'assets/icon/6.png',
            brief: [
                'Pronouns: she/they',
                '9th Year in NYC',
                'Core member of Sapphic Surf, surf instructor'
            ],
            full: `Tati’s relationship to space is relational and energetic—she notices how safety, camaraderie, and gentleness shape how people show up and connect. In Sapphic Surf, she saw people more willing to take risks in the water because the environment was affirming and respectful. "The etiquette was a little more respected... people cheering once you got a wave, that kind of energy." Her interest in the group emerged not just from love of surfing, but from the absence of spaces where queer women could gather without being centered on men or substance-driven nightlife.

            For Tati, the term "sapphic" offers both a clearer emotional boundary and more fluid entry points. "It’s different having something like sapphic vs. the umbrella of queer... to be around people who are consciously excluding themselves from patriarchy." She values the community’s informal nature—there’s no strict vetting—but she trusts that those who come in know how to respect the space. "People have been pretty good at making the determination of: do I identify as sapphic, am I an ally to this community..."

            While she sees the group as welcoming, she doesn’t shy away from noting the gendered imbalance of queer spaces: "We need more [lesbian bars]!" Her vision for space is everyday, joyful, and anchored in emotional safety. She speaks warmly about the idea of building a home base for Sapphic Surf, a place to extend the vibe beyond the water into meals, movie nights, and shared rituals. Her reflections suggest that queer women’s spaces don’t need rigid borders—but they do need intentionality, rhythm, and softness.`,
            quotes: `<blockquote class='quote'>"Surfing is a hard sport to learn... there was something powerful about watching a bunch of people collectively do the same thing, fall over, wipe out—but still get up and try again."</blockquote>
            <blockquote class='quote'>"It goes like a more comfort scene... rather than being in a space where queerness still includes men."</blockquote>
            <blockquote class='quote'>"We got the bi and pan girlies showing up... people are down to come and respect the space."</blockquote>
            <blockquote class='quote'>"Especially in something that’s centered around an activity—it creates a different energy than a bar."</blockquote>`,
            map: {
                path: 'assets/map/6_Tati.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                hint: 'Beaches',
                description: 'Tati depicts a sapphic moment: members of a sapphic surfing club occupy traditionally male-dominated sports spaces on the beach with circles and flags.'
            },
            icon_map: {
                path: 'assets/icon-map/6.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                icon_coordinates: [-73.9100, 40.6943],
            }
        },
        {
            name: 'J',
            sentence: 'She expresses ambivalence toward formal queer women’s spaces. Instead, she favors informal and emotionally safe environments. Her stance is shaped by skepticism toward commodified identity and a protective instinct developed under social and familial pressures.',
            avatar: 'assets/icon/7.png',
            brief: [
                'Pronouns: she/her',
                '1st Year in NYC',
                'Architecture student'
            ],
            full: `J grew up navigating queerness with ambivalence—both seeking connection and maintaining distance. While she has queer friends and enjoys spaces formed naturally through close bonds, she rarely participates in formally organized queer women’s events, expressing discomfort with commercialized or overly labeled spaces. She is deeply skeptical of commodified lesbian identity and holds a strong critique of queer visibility shaped by market forces or social media "idols."

            J often feels caught between wanting more lesbian visibility and avoiding personal exposure. Her spatial comfort stems not from designated queer venues, but from informal and emotionally safe environments—like her sapphic friends’ Brooklyn apartment, where shared meals and gaming became meaningful queer experiences.

            While she sees the need for more public lesbian spaces, her own approach remains cautious and self-protective, influenced by familial expectations, fear of misunderstanding, and years of masking. Despite her ambivalence, J believes that increased visibility matters—especially for future generations—even if she herself may not be at the front lines.`,
            quotes: `<blockquote class='quote'>"I prefer the queer space that is naturally formed by friends, rather than the space that is organized because 'we are lesbians'."</blockquote>

            <blockquote class='quote'>"I think this kind of commercialized lesbian space can easily make people feel that you are a priced label."</blockquote>

            <blockquote class='quote'>"In fact, I still hope that there are more lesbian bars, but I don't want to go and I don't want to represent anyone."</blockquote>

            <blockquote class='quote'>"I don't think I like to sexualize myself, and I don't want to be someone's girlfriend or wife... In a space with men, I will subconsciously turn myself into a child."</blockquote>

            <blockquote class='quote'>"I hope others will fight for it, but I am too tired and have tried many times, but it doesn't work."</blockquote>`,
            map: {
                path: 'assets/map/7_J.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                hint: 'No Maps',
                description: 'J seldom goes to public sapphic spaces, and instead of mapping New York City, she maps the homes of her lesbian friends.'
            },
            icon_map: {
                path: 'assets/icon-map/7.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                icon_coordinates: [-74.0614, 40.7368],
            }
        },
        {
            name: 'Esha',
            sentence: 'Her openness is rooted in a journey from a restrictive cultural context to a queer-supportive community, where identity exploration feels both safe and shared.',
            avatar: 'assets/icon/8.png',
            brief: [
                'Pronouns: she/her',
                '3.5 Years in NYC',
                'Dual-degree student in Communication Design & Historical Sociology '
            ],
            full: `Growing up in India, Esha’s awareness of queerness was shaped by an environment where open expression was rare and social norms reinforced heteronormativity. Though early childhood memories and her time on an all-girls soccer team hinted at her queer identity, it wasn’t until her move to New York City for college that she began to meaningfully explore that part of herself.

            Enrolling in an art school with a strong queer presence, Esha found the freedom to gradually reconnect with her queerness through community, critical self-reflection, and everyday conversations. She speaks warmly about the comfort of queer-centered spaces—both informal ones like home dinners with friends and public ones like sapphic nights at Brooklyn bars. What makes a space queer for her isn’t only its label, but the mutual sense of understanding and presence shared among those within it.

            Esha also raises thoughtful concerns about how queer community resources—like surf clubs, sports groups, or creative collectives—often remain inaccessible to those who are newer, more introverted, or outside nightlife networks. For her, queer bars aren’t just for socializing—they are key sites of information exchange and community access. While she acknowledges that visibility has improved in New York, she advocates for broader, less gatekept forms of outreach that go beyond nightlife.

            Her experience illustrates how spatial and cultural shifts—from constrained environments to openly queer ecosystems—can reshape one’s self-perception and sense of belonging. In her words, what makes a queer space powerful is not the architecture, but "people who’ve thought deeply about who they are—and make you feel like you can do the same."`,
            quotes: `<blockquote class='quote'>"I think it [the culture background] made me a lot slower to accept that side of myself."</blockquote>

            <blockquote class='quote'>"When I go to queer spaces, I feel like I’m going to a ball—I feel safe and my inhibitions are low."</blockquote>

            <blockquote class='quote'>"[The main element that made it feel inclusive was] the people… A lot of the most affirming moments were just at dinner parties at home, surrounded by my queer community. That felt authentic."</blockquote>`,
            map: {
                path: 'assets/map/8_Esha.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                hint: 'Bar Networks',
                description: 'Esha’s map includes both major sapphic or mixed queer bars and some everyday places where she leaves memories, forming a personal network.'
            },
            icon_map: {
                path: 'assets/icon-map/8.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                icon_coordinates: [-73.9530, 40.7000],
            }
        },
        {
            name: 'Zao',
            sentence: 'They value queer and sapphic-centered spaces that respect bodily autonomy, emotional safety, and intersectional inclusivity. Their stance is shaped by a deep embodied sense of nonbinary identity, experiences of marginalization across multiple axes, and a strong commitment to advocacy within everyday interactions.',
            avatar: 'assets/icon/9.png',
            brief: [
                'Pronouns: they/them',
                '2nd Year in NYC',
                'Nonbinary AFAB Queer, mental health crisis psychotherapist, background in Hong Kong and Michigan, artist and activist'
            ],
            full: `Zao’s experience of queerness is deeply rooted in bodily awareness. As a nonbinary individual, they have never felt fully aligned with human gender categories, imagining instead an existence closer to pure code or frequency. Growing up in China and Hong Kong before moving to the U.S., they developed a keen sensitivity to belonging, safety, and recognition, valuing spaces where gender is dynamic and cultural differences are acknowledged.

            For Zao, intersectionality is lived through daily advocacy: correcting misgendering, advocating for clients as a mental health worker, and using their presence as quiet resistance. Chronic fatigue limits their participation in large-scale activism, but they see small, persistent actions as essential to building inclusive spaces.

            Their relationship with public space is shaped by embodied negotiation. Zao resists binary gender presentations through choices in clothing, voice, and posture, carefully navigating visibility and safety in cisnormative environments. In New York, they seek truly intersectional queer spaces that include nonbinary, sapphic, trans, and BIPOC communities, and express a particular longing for more Asian-centered lesbian and nonbinary spaces.

            To Zao, queerness is not merely political—it is a daily, embodied practice of living authentically, holding space for fluidity and difference, and imagining futures where all forms of existence are seen and valued.`,
            quotes: `<blockquote class='quote'>"[Discussing why they put nonbinary identity first] I don't even feel that this body belongs to me. I would rather exist like an electronic code or a frequency, rather than as a biological human form."</blockquote>

            <blockquote class='quote'>"Queer culture means I don't have to fit into anything. That's the beauty of queerness—everyone can be different."</blockquote>

            <blockquote class='quote'>"Even just correcting someone for misgendering me—I see that as advocacy. Because if I don't do it, they will continue to misgender others."</blockquote>

            <blockquote class='quote'>"Many so-called queer spaces are still white-dominant and gender-binary. We need more spaces where sapphics, nonbinary people, and BIPOC communities truly exist."</blockquote>

            <blockquote class='quote'>"Because if I don’t correct them, they will misgender others, which is a kind of advocacy. …My way is to educate others through myself…This is the minimum practice I can do."</blockquote>

            <blockquote class='quote'>"I hope that there will be a very inclusive queer space. That is, gays, transgenders, and lesbians can all come. Everyone is more fluid. There should be more lesbian bars that define themselves as lesbian bars, especially spaces for lesbians of different races, such as Black and Brown. But obviously I didn't see any Asian lesbian bars."</blockquote>`,
            map: {
                path: 'assets/map/9_Zao.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                hint: 'Intersectionality',
                description: 'Zao is very sensitive to the gender, cultural, and racial inclusiveness of space. They call Manhattan "the straightest place" and connects Chinatowns across New York into a network.'
            },
            icon_map: {
                path: 'assets/icon-map/9.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                icon_coordinates: [-74.0153, 40.6515],
            }
        },
        {
            name: 'Morgan',
            sentence: 'To them, the value of sapphic space lies not in fixed labels or boundaries, but in the shared presence and connection among queer individuals. Any space can become sapphic when it is shaped by the people within it, defined by fluid belonging rather than rigid categories.',
            avatar: 'assets/icon/10.png',
            brief: [
                'Pronouns: they/them',
                '12 years in NYC',
                'Nonbinary queer, artist and archivist, educated at SVA and Pratt Institute'
            ],
            full: `Morgan is a nonbinary queer artist and archivist who moved from Michigan to New York in 2013. Their creative practice, rooted in visual and critical studies, explores the intersections of queerness, identity, and storytelling.

            Morgan’s understanding of queerness deepened after undergrad, expanding from sexuality to gender identity, and they came out as nonbinary in 2021. They describe queerness as both about who they love and who they choose to spend time with, emphasizing relational belonging over rigid definitions. Their project Queer Data Portraits reflects a personal approach to data, transforming friends’ LGBTQ+ identities into tangible, intimate visualizations.

            In NYC, Morgan finds affirming spaces primarily through friendships rather than venues, noting that safe, expansive spaces are defined more by who gathers there than by external signals. Although engaged with sapphic nightlife like Ginger’s and Pat, they also experience moments of not-belonging in traditionally lesbian spaces due to gender identity and bisexuality.

            Morgan imagines an ideal sapphic space as an inclusive, lively bar-community hub for queer dancing, mingling, and celebration—centered around queerness in all its fluidity rather than narrow identity categories.`,
            quotes: `<blockquote class='quote'>"Queerness to me is as much about who I am attracted to as who I spend time with."</blockquote>

            <blockquote class='quote'>"I define queer space by who is in it. Any space can feel queer if the people within are queer."</blockquote>

            <blockquote class='quote'>"Since growing more comfortable in my identity, I care less and less about how others perceive me."</blockquote>`,
            map: {
                path: 'assets/map/10_Morgan.png',
                coordinates: [
                    [-74.20, 40.95],
                    [-73.68, 40.95],
                    [-73.68, 40.52],
                    [-74.20, 40.52]
                ],
                hint: 'Portraits',
                description: 'This map briefly outlines the areas of Brooklyn and Queens, which is more private and relational, but the use of portraits emphasizes subjectivity and subjective spatial perception.'
            },
            icon_map: {
                 path: 'assets/icon-map/10.png',
                 coordinates: [
                     [-74.20, 40.95],
                     [-73.68, 40.95],
                     [-73.68, 40.52],
                     [-74.20, 40.52]
                 ],
                 icon_coordinates: [-73.9520, 40.7310]
             }
        }
    ]
}

<script>
import Skill from "./components/Skill.svelte";
import { js, java, csharp, nosql, tools, security, familiar, aws } from './data/data';
</script>

<div class="skills-wrapper">
    <div class="title3 green">Technologies</div>
    <hr class="hr-thick">
    <Skill skill={js}/>
    <Skill skill={java}/>
    <Skill skill={csharp}/>
    <Skill skill={nosql}/>
    <Skill skill={tools}/>
    <Skill skill={security}/>
    <hr class="hr-thin">
    <Skill skill={familiar}/>
    <Skill skill={aws}/>
</div>

<style>
    .skills-wrapper {
        margin-bottom: 1em;
    }

</style>
